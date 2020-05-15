import * as ApiUtil from "../util/budget_table_api_util";

export const RECEIVE_TABLE_ENTRIES = "RECEIVE_ALL_TABLE_ENTRIES";
export const RECEIVE_TABLE_ENTRY = "RECEIVE_TABLE_ENTRY";
export const REMOVE_TABLE_ENTRY = "REMOVE_TABLE_ENTRY";
export const RECEIVE_ENTRY_ERRORS = "RECEIVE_ENTRY_ERRORS";
export const CLEAR_ENTRY_ERRORS = "CLEAR_ENTRY_ERRORS";

export const receiveTableEntries = entries => ({
  type: RECEIVE_TABLE_ENTRIES,
  entries
});

export const receiveTableEntry = entry => {
  return {
    type: RECEIVE_TABLE_ENTRY,
    entry
  }
};

export const removeTableEntry = entryId => ({
  type: REMOVE_TABLE_ENTRY,
  entryId
});

export const receiveEntryErrors = errors => ({
  type: RECEIVE_ENTRY_ERRORS,
  errors
});

export const clearEntryErrors = () => ({
  type: CLEAR_ENTRY_ERRORS,
});

export const fetchEntries = () => dispatch => ApiUtil.fetchEntries()
  .then(entries => dispatch(receiveTableEntries(entries)));

export const fetchEntry = (entryId) => dispatch => ApiUtil.fetchEntry(entryId)
  .then(entry => dispatch(receiveTableEntry(entry)));


export const createEntry = (entry) => dispatch => ApiUtil.createEntry(entry)
  .then(entry => dispatch(receiveTableEntry(entry)))
  .catch(err => {
    debugger;
    return dispatch(receiveEntryErrors(err))
  });

export const updateEntry = (entry) => dispatch => { 
  return (
    ApiUtil.updateEntry(entry)
  .then(entry => dispatch(receiveTableEntry(entry)), err => (
    dispatch(receiveEntryErrors(err))
  ))
  )
}

export const deleteEntry = entryId => dispatch => {
  return (
    ApiUtil.deleteEntry(entryId)
    .then(() => dispatch(removeTableEntry(entryId)))
  )
}