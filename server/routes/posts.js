//import express
// import express from "express";
const express = require('express') ;

//import function from controllers/posts.js
//import createpost
//import updatePost
//import deletePost
const { getPosts, createPost, updatePost, deletePost } =require('../controllers/posts.js') 
//set up express router
const router = express.Router();
//callback function executed when user visits route localhost:5001/posts
router.get("/", getPosts);
//add createpost function and then import it above
router.post("/", createPost);
//editing dynamically with id
router.patch('/:id', updatePost);
//route for delete 
router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);


//export router
module.exports =  router;
