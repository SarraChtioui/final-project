import axios from 'axios';

//returns all the posts we have
const url = 'http://localhost:5000/posts';

//a call to the url and export it
export const fetchPosts = () => axios.get(url);
//callback function for the entire post
export const createPost = (newPost) => axios.post(url, newPost);
//patch request for the updatePost function
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//delete request for the deletePost function
export const deletePost = (id) => axios.delete(`${url}/${id}`);
//like request for likePost function
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);