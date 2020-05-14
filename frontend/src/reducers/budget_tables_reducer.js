import { RECEIVE_TABLE_ENTRIES, RECEIVE_TABLE_ENTRY, REMOVE_TABLE_ENTRY } from "../actions/budget_table_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions"

const budgetTablesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TABLE_ENTRIES:
      let entry = {};
      for(let i = 0; i < action.entries.data.length; i++) {
        entry[action.entries.data[i]._id] = action.entries.data[i];
      }
      return Object.assign({}, nextState, entry);
    case RECEIVE_TABLE_ENTRY:
      return Object.assign({}, nextState, { [action.entry.data._id]: action.entry.data });
    case REMOVE_TABLE_ENTRY:
      delete nextState[action.entryId];
      return nextState;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

export default budgetTablesReducer;