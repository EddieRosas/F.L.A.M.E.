import { connect } from 'react-redux'
import { fetchEntries } from "../../actions/budget_table_actions";
import Calculators from './fire_calcs';


const mSTP = (state) => {
    return ({

    })
}

const mDTP = (dispatch) => ({
  fetchEntries: () => dispatch(fetchEntries())
});

export default connect(mSTP, mDTP)(Calculators);