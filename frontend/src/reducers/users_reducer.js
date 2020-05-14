import { RECEIVE_FI_DATA } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FI_DATA:
      return action.data;
    default:
      return state;
  }
}

export default usersReducer;