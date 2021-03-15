//to combine all individual reducers available
import { combineReducers } from 'redux';

import posts from './posts';

//all individual reducers available
//key and value are the same so only kept one export it to use
//this is returned in Posts.js
export default combineReducers({ posts });