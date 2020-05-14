import { combineReducers } from "redux";

import session from "./session_reducer.js";
import errors from "./errors_reducer"
import budgetTablesReducer from "./budget_tables_reducer"
import usersReducer from "./users_reducer";

const RootReducer = combineReducers({
  session: session,
  user: usersReducer,
  budgetTable: budgetTablesReducer,
  errors: errors
});

export default RootReducer;
