console.log("[postController] initialized");

// Importing necessary libraries
var express = require('express');
var post = require('../model/post');

// Setting up an array of posts for testing
let posts = [];
let post1 = post.createPost("Ferrari #1", "Charles Leclerc world champ");
let post2 = post.createPost("OK maybe not", "what the hell");
posts.push(post1);
posts.push(post2);

// Function to get all the posts
exports.getPosts = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(posts);
}

// Function to get a single post
exports.getPost = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(posts[req.params.postId]);
}

// Function to save a new post
exports.savePost = function(req, res) {
    console.log(req.body);
    let newPost = post.createPost(req.body.title, req.body.description);
    posts.push(newPost);
    res.setHeader('Content-Type', 'application/json');
    res.send(posts);
}

// Function to delete a post
exports.deletePost = function(req, res) {
    posts.splice(req.params.postId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(posts);
}

// Function to update a post
exports.updatePosts = function(req, res) {
    // Get the existing post from the array
    var updatedPost = posts[req.params.postId];

    // Check to see what has been passed and update the local copy
    console.log(req.body.title);
    if (req.body.title)
        updatedPost.title = req.body.title;
    if (req.body.description)
        updatedPost.description = req.body.description;

    // Save the local copy of the post back into the array
    posts[req.params.postId] = updatedPost;

    res.setHeader('Content-Type', 'application/json');
    res.send(posts[req.params.postId]);
}