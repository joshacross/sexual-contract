// Configure express-session variables
const express = require("express");
const path = require("path");

const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

require("dotenv").config();

//setup app and port
 const app = express();
 const port = process.env.PORT || "8000";


 const session = {
   secret: process.env.SESSION_SECRET,
   cookie: {},
   resave: false,
   saveUninitialized: false
 };

 if (app.get("env") === "production") {
   // Serve secure cookies, requires HTTPS
   session.cookie.secure = true;
 }













// const exphbs = require('express-handlebars');

// const sequelize = require("./config/connection");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const session = {
//   secret: process.env.SESSION_SECRET,
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// const authRouter = require('./controllers/api/auth.js');

// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers });

// app.engine('handlebars', hbs.engine);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(expressSession(session));

// //Passport Config
// passport.use(strategy);
// app.use(passport.initialize());
// app.use(passport.session());

// // Serialize and DeSerialize User Instances to and from session
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// // Creating custom middleware with Express
// app.use((req, res, next) => {
//   res.locals.isAuthenticated = req.isAuthenticated();
//   next();
// });

// // Router mounting
// app.use('/', authRouter);

//  const strategy = new Auth0Strategy(
//   {
//     domain: process.env.AUTH0_DOMAIN,
//     clientID: process.env.AUTH0_CLIENT_ID,
//     clientSecret: process.env.AUTH0_CLIENT_SECRET,
//     callbackURL: process.env.AUTH0_CALLBACK_URL
//   },
//   function(accessToken, refreshToken, extraParams, profile, done) {
//     /**
//      * Access tokens are used to authorize users to an API
//      * (resource server)
//      * accessToken is the token to call the Auth0 API
//      * or a secured third-party API
//      * extraParams.id_token has the JSON Web Token
//      * profile has all the information from the user
//      */
//     return done(null, profile);
//   }
// );

// app.use(require('./controllers/'));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

// server.js

/**
 * Required External Modules
 */

/**
 * Session Configuration (New!)
 */

// configure expressSession
  
  
/**
 * Passport Configuration (New!)
 */



/**
 *  App Configuration
 */
 
// Rest of code...