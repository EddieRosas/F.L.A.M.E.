import { connect } from 'react-redux';
import { updateEntry, fetchEntries, fetchEntry, deleteEntry } from '../../actions/budget_table_actions';
import BudgetList from './budget_list.jsx';


const mSTP = (state) => {

  let entries = Object.values(state.budgetTable);

  let monthsHash = {
    1: { month: "Jan", expenses: 0, income: 0 },
    2: { month: "Feb", expenses: 0, income: 0 },
    3: { month: "March", expenses: 0, income: 0 },
    4: { month: "Apr", expenses: 0, income: 0 },
    5: { month: "May", expenses: 0, income: 0 },
    6: { month: "June", expenses: 0, income: 0 },
    7: { month: "July", expenses: 0, income: 0 },
    8: { month: "Aug", expenses: 0, income: 0 },
    9: { month: "Sept", expenses: 0, income: 0 },
    10: { month: "Oct", expenses: 0, income: 0 },
    11: { month: "Nov", expenses: 0, income: 0 },
    12: { month: "Dec", expenses: 0, income: 0 },
  };

  entries.forEach((entry) => {
    let monthNum = new Date(entry.date).getMonth() + 1;
    if (monthsHash[monthNum]) {
      if (entry.incomeOrDebt === false) {
        monthsHash[monthNum].expenses += Number(-(entry.amount.$numberDecimal)).toFixed(2);
      } else {
        monthsHash[monthNum].income += Number(entry.amount.$numberDecimal).toFixed(2);
      }
    }
  });

  let data = Object.values(monthsHash);
  
  
  let result = [];
  if (state.budgetTable) {
    result = Object.values(state.budgetTable);
  }
  return {
    currentUser: state.session.user,
    entries: result,
    data: data
  }
};

const mDTP = (dispatch) => ({
  updateEntry: (entry) => dispatch(updateEntry(entry)),
  fetchEntries: () => dispatch(fetchEntries()),
  fetchEntry: (entryId) => dispatch(fetchEntry(entryId)),
  deleteEntry: (entryId) => dispatch(deleteEntry(entryId))
});

export default connect(mSTP, mDTP)(BudgetList);