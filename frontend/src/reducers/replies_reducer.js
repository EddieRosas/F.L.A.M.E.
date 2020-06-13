import {
    RECEIVE_REPLIES,
    RECEIVE_REPLY,
    REMOVE_REPLY,
    RECEIVE_REPLY_ERRORS,
    CLEAR_REPLY_ERRORS } from "../actions/reply_actions";

const repliesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_REPLIES:
            let reply = {};
            for(let i=0; i<action.replies.data.length;i++){
                reply[action.replies.data[i]._id] = action.replies.data[i];
            }
            return Object.assign({}, nextState, reply);
        case RECEIVE_REPLY:
            return Object.assign({}, nextState, { [action.reply.id]: action.reply });

        case REMOVE_REPLY:
            delete nextState[action.replyId];
            return nextState;
        case RECEIVE_REPLY_ERRORS:
            return {};
        case CLEAR_REPLY_ERRORS:
            return {};

        default:
            return state;
    }
}

export default repliesReducer;