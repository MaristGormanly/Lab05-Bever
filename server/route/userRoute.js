console.log("[userRoutes] initialized");
let userController = require('../controller/userController');
let userRoutes = require('../controller/userController');

// require the express library
var express = require('express');
// create chainable route handlers for a path by using app.route()
// see https://expressjs.com/en/guide/routing.html
var router = express.Router();

//Post
router.route('/')
    .get( ( req, res ) => {
        userController.getAllUsers( req, res );
    })
    .post( ( req, res ) => {
    userController.saveUser( req, res );
    });


// user by array index route
router.route('/:userId')
    .get( ( req, res ) => {
    userController.getUser( req, res );
    });


module.exports = router;
