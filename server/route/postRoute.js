console.log("[postRoute] Initialized");

let postController = require('../controller/postController');
let postRoutes = require('../controller/postController');

var express = require('express');
var router = express.Router();

//API calls
router.route('/')
    .get( ( req, res ) => {
        postController.getPosts( req, res );
    })
    .post( ( req, res ) => {
        postController.savePost( req, res );
    })
    .patch( ( req, res ) => {
        postController.updatePost( req, res );
    })
    .delete( ( req, res ) => {
        postController.deletePost( req, res );
    });
    

// UserID API calls
router.route('/:postId')
    .get( ( req, res ) => {
        postController.getPost( req, res );
    })
    .patch( ( req, res ) => {
        postController.updatePost( req, res );
    })
    .delete( ( req, res ) => {
        postController.deletePost( req, res );
    });





module.exports = router;
