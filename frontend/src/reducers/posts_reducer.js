import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST,RECEIVE_POST_ERRORS,CLEAR_POST_ERRORS } from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POSTS:
            let post = {};
            for (let i = 0; i < action.posts.data.length; i++) {
                post[action.posts.data[i]._id] = action.posts.data[i];
            }
            
            return Object.assign({}, nextState, post);
        case RECEIVE_POST:
            return Object.assign({}, nextState, { [action.post.data._id]: action.post.data });
        case REMOVE_POST:
            delete nextState[action.postId];
            return nextState;
        case RECEIVE_POST_ERRORS:
            return {};
        case CLEAR_POST_ERRORS:
            return {};

        default:
            return state;
    }
}

export default postsReducer;