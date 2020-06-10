import * as ApiUtil from "../util/post_api_util";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST= "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";


export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    }
};

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const clearPostErrors = () => ({
    type: CLEAR_POST_ERRORS,
});

// toast messages
const notifySuccessful = (message) => {
    toast.success(message);
}

const notifyFailure = (message) => {
    toast.error(message);
}

const notifyWarning = (message) => {
    toast.warn(message);
}

//thunk actions
export const fetchPost = () => dispatch => ApiUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)));

export const fetchPost = (postId) => dispatch => ApiUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)));


export const createPost = (post) => dispatch => ApiUtil.createPost(post)
    .then(post => {
        notifySuccessful('Successfully created post!');
        return dispatch(receivePost(post));
    })
    .catch(err => {
        Object.values(err.response.data).map((error) => {
            return (notifyFailure(error))
        });
        return dispatch(receivePostErrors(err))
    });

export const updatePost = (post) => dispatch => {
    return (
        ApiUtil.updatePost(post)
            .then(post => {
                notifySuccessful('Successfully updated post!');
                return dispatch(receivePost(post));
            })
            .catch(err => {
                Object.values(err.response.data).map((error) => {
                    return (notifyFailure(error))
                });
                return dispatch(receivePosts(err));
            })
    )
}

export const deletePost = postId => dispatch => {
    return (
        ApiUtil.deletePost(postId)
            .then(() => {
                notifyWarning('Successfully deleted post!');
                return dispatch(removePost(postId));
            }
            )
            .catch(() => {
                notifyWarning('Deletion unsuccessful.');
            })
    )
}