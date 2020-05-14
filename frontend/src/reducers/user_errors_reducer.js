import { RECEIVE_FI_ERRORS, CLEAR_FI_ERRORS } from "../actions/user_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FI_ERRORS:
      return action.errors
    case CLEAR_FI_ERRORS:
      return [];
    default:
      return state;
  }
}
