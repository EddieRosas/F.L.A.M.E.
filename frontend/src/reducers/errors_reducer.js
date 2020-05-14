import { combineReducers } from "redux";

import EntryErrorsReducer from "./budget_table_errors_reducer"
import SessionErrorsReducer from "./session_errors_reducer";
import userErrors from "./user_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  entry: EntryErrorsReducer,
  user: userErrors
});
