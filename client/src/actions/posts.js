//import actionTypes to avoid string errors
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
// use * to import everything from the actions as api aka use fetch post
import * as api from '../api';

//action creators with type and payload
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    //add redux thunk and async to access dispatch
    dispatch({ type:FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
//create post action
export const createPost = (post) => async (dispatch) => {
  try {
    //making an api request to a post api request to backend server sending a post
    const { data } = await api.createPost(post);

    //dispatch a create action
    dispatch({ type:CREATE, payload: data});
  } catch (error) {
    //if it does not work 
    console.log(error);
    
  }
}
//update post action
export const updatePost = (id, post) => async (dispatch) => {
  try {
    //data for the updated post
    const { data } = await api.updatePost(id, post);
    dispatch({ type:UPDATE, payload:data });
  } catch (error) {
  //if it does not work 
  console.log(error);
  }
}
//delete post action
export const deletePost = (id) => async (dispatch) => {
  try {
    //just wait for the api call, no data needed
    await api.deletePost(id);

    dispatch({ type:DELETE, payload:id});
  } catch (error) {
  console.log(error);
  }
}
//like post action
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type:UPDATE, payload:data });
  } catch (error) {
  console.log(error);
  }
}