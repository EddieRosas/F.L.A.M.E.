import {
  RECEIVE_REPLY_ERRORS,
  CLEAR_REPLY_ERRORS,
} from "../actions/reply_actions";

const ReplyErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REPLY_ERRORS:
      return action.errors;
    case CLEAR_REPLY_ERRORS:
      return [];

    default:
      return state;
  }
};

export default ReplyErrorsReducer;
