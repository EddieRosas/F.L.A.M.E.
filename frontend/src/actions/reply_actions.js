import * as ApiUtil from "../util/post_api_util";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

export const RECEIVE_REPLIES = "RECEIVE_REPLIES";
export const RECEIVE_REPLY = "RECEIVE_REPLY";
export const REMOVE_REPLY = "REMOVE_REPLY";
export const RECEIVE_REPLY_ERRORS = "RECEIVE_REPLY_ERRORS";
export const CLEAR_REPLY_ERRORS = "CLEAR_REPLY_ERRORS";


export const receiveReplies = replies => ({
    type: RECEIVE_REPLIES,
    replies
});

export const receiveReply = reply => {
    return {
        type: RECEIVE_REPLY,
        reply
    }
};

export const removeReply = replyId => ({
    type: REMOVE_REPLY,
    replyId
});

export const receiveReplyErrors = errors => ({
    type: RECEIVE_REPLY_ERRORS,
    errors
});

export const clearReplyErrors = () => ({
    type: CLEAR_REPLY_ERRORS,
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
export const fetchReplies = () => dispatch => ApiUtil.fetchReplies()
    .then(replies => dispatch(receiveReplies(replies)));

export const fetchReply = (replyId) => dispatch => ApiUtil.fetchReply(replyId)
    .then(reply => dispatch(receiveReply(reply)));


export const createReply = (reply) => dispatch => ApiUtil.createReply(reply)
    .then(reply => {
        notifySuccessful('Successfully created reply!');
        return dispatch(receiveReply(reply));
    })
    .catch(err => {
        Object.values(err.response.data).map((error) => {
            return (notifyFailure(error))
        });
        return dispatch(receivePostErrors(err))
    });

export const updateReply = (reply) => dispatch => {
    return (
        ApiUtil.updateReply(reply)
            .then(reply => {
                notifySuccessful('Successfully updated reply!');
                return dispatch(receiveReply(reply));
            })
            .catch(err => {
                Object.values(err.response.data).map((error) => {
                    return (notifyFailure(error))
                });
                return dispatch(receivePosts(err));
            })
    )
}

export const deleteReply = replyId => dispatch => {
    return (
        ApiUtil.deleteReply(replyId)
            .then(() => {
                notifyWarning('Successfully deleted post!');
                return dispatch(removeReply(replyId));
            }
            )
            .catch(() => {
                notifyWarning('Deletion unsuccessful.');
            })
    )
}