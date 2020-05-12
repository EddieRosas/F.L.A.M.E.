import { connect } from 'react-redux';
//import { updateEntry, fetchEntries, fetchEntry, deleteEntry } from '../../actions/budget_table_actions';
import BudgetList from './budget_list.jsx';

const mSTP = (state) => ({
  currentUser: state.session.user,
  entries: state.budgetTables.entries
});

const mDTP = (dispatch) => ({
  updateEntry: (entry) => dispatch(updateEntry(entry)),
  fetchEntries: (userId) => dispatch(fetchEntries(userId)),
  fetchEntry: (entryId) => dispatch(fetchEntry(entryId)),
  deleteEntry: (entryId) => dispatch(deleteEntry(entryId))
});

export default connect(mSTP, mDTP)(BudgetList);