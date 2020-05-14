import * as ApiUtil from "../util/user_api_util";

export const RECEIVE_FI_DATA = "RECEIVE_FI_DATA";
export const RECEIVE_FI_ERRORS = "RECEIVE_FI_ERRORS";
export const CLEAR_FI_ERRORS = "CLEAR_FI_ERRORS";

export const receiveFiData = data => ({
  type: RECEIVE_FI_DATA,
  data
});

export const receiveFiErrors = errors => ({
  type: RECEIVE_FI_ERRORS,
  errors
});

export const clearFiErrors = () => ({
  type: CLEAR_FI_ERRORS
});

export const fetchFiData = (userId) => dispatch => ApiUtil.fetchFiData(userId)
  .then(data => dispatch(receiveFiData(data)));

export const updateFiNum = (user, fireNum) => dispatch => ApiUtil.updateFiNum(user, fireNum)
  .then(data => dispatch(receiveFiData(data)));

export const updateYearsToFI = (user, yearsToFI) => dispatch => ApiUtil.updateYearsToFI(user, yearsToFI)
  .then(data => dispatch(receiveFiData(data)));
