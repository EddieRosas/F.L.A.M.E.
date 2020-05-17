import * as ApiUtil from "../util/budget_table_api_util";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
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

// toast messages
const notifySuccessful = (message) => {
  toast.success(message);
}

const notifyFailure = (message) => {
  toast.error(message);
}

const notifyWarning = (message) => {
  toast.warn(message);
}

export const fetchEntries = () => dispatch => ApiUtil.fetchEntries()
  .then(entries => dispatch(receiveTableEntries(entries)));

export const fetchEntry = (entryId) => dispatch => ApiUtil.fetchEntry(entryId)
  .then(entry => dispatch(receiveTableEntry(entry)));


export const createEntry = (entry) => dispatch => ApiUtil.createEntry(entry)
  .then(entry => {
    notifySuccessful('Successfully created budget item!');
    return dispatch(receiveTableEntry(entry));
  })
  .catch(err => {
    Object.values(err.response.data).map((error) => {
      return (notifyFailure(error))
    });
    return dispatch(receiveEntryErrors(err))
  });

export const updateEntry = (entry) => dispatch => { 
  return (
    ApiUtil.updateEntry(entry)
    .then(entry => {
      notifySuccessful('Successfully updated budget item!');
      debugger;
      return dispatch(receiveTableEntry(entry));
    })
    .catch(err => {
      //notifyFailure(err.data.message);
      debugger;
      return dispatch(receiveEntryErrors(err));
    })
  )
}

export const deleteEntry = entryId => dispatch => {
  return (
    ApiUtil.deleteEntry(entryId)
    .then(() => {
        notifyWarning('Successfully deleted item!');
        return dispatch(removeTableEntry(entryId));
      }
    )
    .catch(() => {
      notifyWarning('Deletion unsuccessful.');
    })
  )
}