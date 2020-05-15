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

export const updateFiNum = (userId, fireNum) => dispatch => ApiUtil.updateFiNum(userId, fireNum)
  .then(data => dispatch(receiveFiData(data)));

export const updateYearsToFI = (userId, yearsToFI) => dispatch => ApiUtil.updateYearsToFI(userId, yearsToFI)
  .then(data => dispatch(receiveFiData(data)));
