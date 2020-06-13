import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_POSTS:
        return Object.assign({}, nextState, action.posts);
      case RECEIVE_POST:
        return Object.assign({}, nextState, {
          [action.post.data._id]: action.post.data,
        });
      case REMOVE_POST:
        delete nextState[action.postId];
        return nextState;
      case RECEIVE_USER_LOGOUT:
        return {};
        
      default:
        return state;
    }
}

export default postsReducer;