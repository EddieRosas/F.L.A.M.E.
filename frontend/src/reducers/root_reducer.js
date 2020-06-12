import { combineReducers } from "redux";

import session from "./session_reducer.js";
import errors from "./errors_reducer"
import budgetTablesReducer from "./budget_tables_reducer"
import usersReducer from "./users_reducer";
import postsReducer from './posts_reducer';
import repliesReducer from './replies_reducer';

const RootReducer = combineReducers({
  session: session,
  user: usersReducer,
  budgetTable: budgetTablesReducer,
  post: postsReducer,
  reply: repliesReducer,
  errors: errors
});

export default RootReducer;
