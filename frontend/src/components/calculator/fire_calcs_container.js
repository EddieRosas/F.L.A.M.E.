import { connect } from 'react-redux'
import { fetchEntries } from "../../actions/budget_table_actions";
import Calculators from './fire_calcs';


const mSTP = (state) => {

    let entries = Object.values(state.budgetTable);

    let monthsHash = {
        1 : { month: "Jan", expenses: 0, income: 0 },
        2 : { month: "Feb", expenses: 0, income: 0 },
        3 : { month: "March", expenses: 0, income: 0 },
        4 : { month: "Apr", expenses: 0, income: 0 },
        5 : { month: "May", expenses: 0, income: 0 },
        6 : { month: "June", expenses: 0, income: 0 },
        7 : { month: "July", expenses: 0, income: 0 },
        8 : { month: "Aug", expenses: 0, income: 0 },
        9 : { month: "Sept", expenses: 0, income: 0 },
        10 : { month: "Oct", expenses: 0, income: 0 },
        11 : { month: "Nov", expenses: 0, income: 0 },
        12 : { month: "Dec", expenses: 0, income: 0 }
    }

    entries.forEach(entry => {
        let monthNum = (new Date(entry.date).getMonth() + 1)
        if (monthsHash[monthNum]) {
            if (entry.incomeOrDebt === false) {
                monthsHash[monthNum].expenses += Number(entry.amount.$numberDecimal)
            } else {
                monthsHash[monthNum].income += Number(entry.amount.$numberDecimal)
            }
        }
    });
    
    let data = Object.values(monthsHash);

    return ( {
        entries: entries,
        data: data
    }
    )
}

const mDTP = (dispatch) => ({
  fetchEntries: () => dispatch(fetchEntries())
});

export default connect(mSTP, mDTP)(Calculators);