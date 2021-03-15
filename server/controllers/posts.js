var mongoose = require('mongoose');


//to add logic from postMessage to both functions
const PostMessage = require("../models/postMessage.js") ;

//file to organize routes logic better and avoid clutter in routes posts.js file
//add the try and catch block with the async function
const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get single post
 const getPost = async (req, res) => { 
  const { id } = req.params;

  try {
      const post = await PostMessage.findById(id);
      
      res.status(200).json(post);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

//export createPost function to routes
//try and catch block with access to body
 const createPost = async (req, res) => {
  // const post = req.body;
  const { title, message, creator, selectedFile, tags } = req.body;

  
  try {
const newPost = new PostMessage({title, message, creator, selectedFile, tags });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//create and export update function added in routes
//request made to posts/123
 const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
}
// export deletepost function
 const deletePost = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id))

  return res.status(404).send('No post found with that id');

  await PostMessage.findByIdAndRemove(id);


  res.json ({ message: 'Post deleted successfully'});
}
//export likePost function
// export const likePost = async (req, res) => {
//   const { id } = req.params;
//   if(!mongoose.Types.ObjectId.isValid(id))

//   return res.status(404).send('No post found with that id');

//   const post = await PostMessage.findById(id);

//   const updatesPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
//   res.json(updatedPost);

// }


module.exports = {
  getPost, getPosts,createPost,updatePost,deletePost
}