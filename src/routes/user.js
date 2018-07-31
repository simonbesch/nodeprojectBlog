import express from "express"
const users = express.Router()
import { User } from '../model/user'
import multer from 'multer'
const uploads = multer({dest:'./uploads'})
import passport from "passport"
import passportLocal from "passport-local"

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
         return done(err); }
      if (!user) {
        return done(null, false); }
      //if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

users.get("/register", (req, res) => {
  res.render("register",{title:"register"})
});

users.post("/register", (req, res) => {
  const user = new User(req.body)
  user.save((err, user) => {
    if(err) throw err
    res.redirect("/")
  })
})


users.get("/login", (req, res) => {
  res.render("login", {title:"login"})
});

users.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/users/login' }));


users.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

export {users}
