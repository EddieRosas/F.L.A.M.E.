import { combineReducers } from "redux";
import session from "./session_reducer.js";
import errors from "./errors_reducer"

const RootReducer = combineReducers({
  session: session,
  errors: errors
});

export default RootReducer;
