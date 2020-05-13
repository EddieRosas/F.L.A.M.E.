import { RECEIVE_TABLE_ENTRIES, RECEIVE_TABLE_ENTRY, REMOVE_TABLE_ENTRY } from "../actions/budget_table_actions";

const budgetTablesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TABLE_ENTRIES:
      return action.entries.data;
    case RECEIVE_TABLE_ENTRY:
      return Object.assign({}, nextState, { [action.entry.data.id]: action.entry.data });
    case REMOVE_TABLE_ENTRY:
      delete nextState[action.entryId];
      return nextState;
    default:
      return state;
  }
}

export default budgetTablesReducer;