import express from "express"
import path from "path"
import favicon from "serve-favicon"
import passport from "passport"
import volleyball from "volleyball"
import multer from "multer"
import session from "express-session"
import bodyParser from "body-parser"
import { User } from './model/user'
// config body-parseur

//
var app = express()

//don't work
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: true,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))
//
//config passport
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'anything', resave:true, saveUninitialized:true }));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//config multer
const upload = multer({dest:'./uploads'})
//
import flash from "connect-flash"
import mongoose from "mongoose"
const port = 4567
//config mongo
mongoose.connect('mongodb://localhost/auth_db');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('[MONGODB][server ok] ===> connected!')
});
//
import {routes} from "./routes/index"
import {stories} from "./routes/story"
import {users} from "./routes/user"
//view engine setup
app.set("views" ,path.join(__dirname,'views'))
app.set('view engine', 'pug')
//
app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(flash())

//
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
})


app.use('/', routes)
app.use('/users', users)
app.use('/stories', stories)



app.listen(port,() =>{
  console.log(`[App running on port : ${port}]`);
})

const start ="server start"
console.log(`${start}`);
