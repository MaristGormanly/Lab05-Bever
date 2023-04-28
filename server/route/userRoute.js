console.log("[userRoutes] initialized");
let userController = require('../controller/userController');
let userRoutes = require('../controller/userController');

// require the express library
var express = require('express');
// create chainable route handlers for a path by using app.route()
var router = express.Router();

//API calls
router.route('/')
    .get( ( req, res ) => {
        userController.getUsers( req, res );
    })
    .post( ( req, res ) => {
        userController.saveUser( req, res );
    })
    .patch( ( req, res ) => {
        userController.updateUser( req, res );
    })
    .delete( ( req, res ) => {
        userController.deleteUser( req, res );
    });
    

// UserID API calls
router.route('/:userId')
    .get( ( req, res ) => {
        userController.getUser( req, res );
    })
    .patch( ( req, res ) => {
        userController.updateUser( req, res );
    })
    .delete( ( req, res ) => {
        userController.deleteUser( req, res );
    });
    

module.exports = router;
