import { RECEIVE_ENTRY_ERRORS, CLEAR_ENTRY_ERRORS } from "../actions/budget_table_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ENTRY_ERRORS:
      return action.errors;
    case CLEAR_ENTRY_ERRORS:
      return [];
    default:
      return state;
  }
};
