//function combining the state the action with different scenarios, the state is posts
//replaced reducer by export default because we do not need it here
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
      case CREATE://spread posts and get the action payload
      return [...posts, action.payload];
      case UPDATE:
        //if the post._id matches, return the payload with the newly updated post
        return posts.map((post) => post._id === action.payload._id? action.payload:post);
    case DELETE:
      //filter the posts deleted and return them
      return posts.filter((post) => post._id !== action.payload);
   
    
    
    default:
      return posts;
  }
};
