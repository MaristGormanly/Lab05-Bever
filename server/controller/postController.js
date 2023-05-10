console.log("[postController] initialized");

var express = require('express');
var post = require('../model/post');

let posts = [];
let post1 = post.createPost("Ferrari #1","Charle Leclerc world champ");
let post2 = post.createPost("OK maybe not","what the hell");

posts.push(post1);
posts.push(post2);

//GetUsers function
exports.getPosts = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(posts);
}

exports.getPost = function(req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(posts[req.params.postId]);
}


//function for the .post API
exports.savePosts = function(req, res) {
	console.log(req.body)
	let newPost = user.createPosts(req.body.title, req.body.description);
	users.push(newPost);
	res.setHeader('Content-Type', 'application/json');
	res.send(posts);
}


exports.deletePost = function(req, res) {
	users.splice(req.params.postId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(posts);
}

exports.updatePosts = function(req, res) {
	// get the existing user from the array
	var updatedPosts = posts[req.params.postId];

	// check to see what has been passed and update the local copy
	console.log(req.body.title);
	if(req.body.title)
		updatedPost.title = req.body.title;
	if(req.body.description)
		updatedPost.description = req.body.description;
	// save the local copy of the user back into the array
	posts[req.params.postId] = updatedPost;

	res.setHeader('Content-Type', 'application/json');
	res.send(posts[req.params.postId]);
}

