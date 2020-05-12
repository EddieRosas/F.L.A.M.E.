// need to uncomment out createEntry
import { connect } from 'react-redux';
//import { createEntry } from '../../actions/budget_table_actions';
import BudgetForm from './budget_form.jsx';

const mSTP = (state) => ({
  currentUser: state.session.user
});

const mDTP = (dispatch) => ({
  //createEntry: (entry) => dispatch(createEntry(entry))
});

export default connect(mSTP, mDTP)(BudgetForm);
