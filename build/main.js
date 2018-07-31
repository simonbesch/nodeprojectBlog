require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const UserSchema = new Schema({
  email: { type: String },
  username: { type: String, index: true },
  password: { type: String }
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema);



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serve_favicon__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_passport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_volleyball__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_multer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_session__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_user__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_connect_flash__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_connect_flash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_story__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_user__ = __webpack_require__(16);









// config body-parseur

//
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

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
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_6_express_session___default()({ secret: 'anything', resave: true, saveUninitialized: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_passport___default.a.initialize());
app.use(__WEBPACK_IMPORTED_MODULE_3_passport___default.a.session());

__WEBPACK_IMPORTED_MODULE_3_passport___default.a.serializeUser(function (user, done) {
  done(null, user.id);
});

__WEBPACK_IMPORTED_MODULE_3_passport___default.a.deserializeUser(function (id, done) {
  __WEBPACK_IMPORTED_MODULE_8__model_user__["a" /* User */].findById(id, function (err, user) {
    done(err, user);
  });
});

//config multer
const upload = __WEBPACK_IMPORTED_MODULE_5_multer___default()({ dest: './uploads' });
//


const port = 4567;
//config mongo
__WEBPACK_IMPORTED_MODULE_10_mongoose___default.a.connect('mongodb://localhost/auth_db');
var db = __WEBPACK_IMPORTED_MODULE_10_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('[MONGODB][server ok] ===> connected!');
});
//



//view engine setup
app.set("views", __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, 'views'));
app.set('view engine', 'pug');
//
app.use(__WEBPACK_IMPORTED_MODULE_4_volleyball___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({extended:false}))
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_9_connect_flash___default()());

//
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use('/', __WEBPACK_IMPORTED_MODULE_11__routes_index__["a" /* routes */]);
app.use('/users', __WEBPACK_IMPORTED_MODULE_13__routes_user__["a" /* users */]);
app.use('/stories', __WEBPACK_IMPORTED_MODULE_12__routes_story__["a" /* stories */]);

app.listen(port, () => {
  console.log(`[App running on port : ${port}]`);
});

const start = "server start";
console.log(`${start}`);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const routes = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

//get -home page
routes.get('/', (req, res) => {
  console.log(req.user);
  res.render("index", { title: "Accueil" });
});



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_story__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);

const stories = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();


const uploads = __WEBPACK_IMPORTED_MODULE_2_multer___default()({ dest: './uploads' });


stories.get("/", (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__model_story__["a" /* Story */].find({}, (err, stories) => {
    if (err) throw err;
    res.render("membre", { stories, title: "Histoires" });
  }).populate('auteur');
});

stories.get("/creatblog", (req, res) => {
  res.render("creatblog", { title: "Writing History" });
});

stories.post('/creatblog', (req, res) => {
  req.body.auteur = req.user._id;
  const newStory = new __WEBPACK_IMPORTED_MODULE_1__model_story__["a" /* Story */](req.body);
  if (req.file) {
    console.log('uploding img');
    const profileimage = req.file.filename;
  } else {
    console.log('no img uploaded');
    const profileimage = 'noimage.png';
  }
  newStory.save((err, story) => {
    if (err) {
      // res.send(err)
      res.redirect('/');
      // alert("votre requete n'à pas était enregistrer, veuillez ressayer")
      console.log(err, "votre requete n'à pas était enregistrer, veuillez ressayer");
    } else {
      res.redirect('/');
      // res.send(req.body);
      console.log(req.body);
    }
  });
  // req.flash('succcess', 'vous pouvais vous co vous etes dans la BdD')
  //res.redirect('/')
});

stories.get("/:id", (req, res) => {
  console.log(req.params.id);
  __WEBPACK_IMPORTED_MODULE_1__model_story__["a" /* Story */].find({ _id: req.params.id }, (err, story) => {
    if (err) throw err;
    console.log(story[0]);
    console.log(story[0].name);
    story = story[0];

    res.render("histoire", {
      story,
      title: story.name
    });
  });
});

stories.get('/delete/:id', function (req, res) {
  const _id = req.params.id;
  __WEBPACK_IMPORTED_MODULE_1__model_story__["a" /* Story */].findOneandRemove({ _id }, err => {
    if (err) throw err;
    res.redirect("http://localhost:4567/stories");
  });
});



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const storySchema = new Schema({
  name: { type: String },
  ouvrage: { type: String },
  type: { type: String },
  auteur: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Story = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Story', storySchema);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_passport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport_local__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport_local___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_passport_local__);

const users = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();


const uploads = __WEBPACK_IMPORTED_MODULE_2_multer___default()({ dest: './uploads' });



const LocalStrategy = __WEBPACK_IMPORTED_MODULE_4_passport_local___default.a.Strategy;

__WEBPACK_IMPORTED_MODULE_3_passport___default.a.use(new LocalStrategy(function (username, password, done) {
  __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* User */].findOne({ username: username }, function (err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    //if (!user.verifyPassword(password)) { return done(null, false); }
    return done(null, user);
  });
}));

users.get("/register", (req, res) => {
  res.render("register", { title: "register" });
});

users.post("/register", (req, res) => {
  const user = new __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* User */](req.body);
  user.save((err, user) => {
    if (err) throw err;
    res.redirect("/");
  });
});

users.get("/login", (req, res) => {
  res.render("login", { title: "login" });
});

users.post('/login', __WEBPACK_IMPORTED_MODULE_3_passport___default.a.authenticate('local', { successRedirect: '/',
  failureRedirect: '/users/login' }));

users.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});



/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map