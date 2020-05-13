import { connect } from 'react-redux';
import { updateEntry, fetchEntries, fetchEntry, deleteEntry } from '../../actions/budget_table_actions';
import BudgetList from './budget_list.jsx';




const mSTP = (state) => {
  let result = [];
  if (state.budgetTable) {
    result = Object.values(state.budgetTable);
  }
  return {
    currentUser: state.session.user,
    entries: result
  }
};

const mDTP = (dispatch) => ({
  updateEntry: (entry) => dispatch(updateEntry(entry)),
  fetchEntries: () => dispatch(fetchEntries()),
  fetchEntry: (entryId) => dispatch(fetchEntry(entryId)),
  deleteEntry: (entryId) => dispatch(deleteEntry(entryId))
});

export default connect(mSTP, mDTP)(BudgetList);