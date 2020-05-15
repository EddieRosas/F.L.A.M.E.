import { connect } from 'react-redux'
import { fetchEntries } from "../../actions/budget_table_actions";
import { updateFiNum, updateYearsToFI } from "../../actions/user_actions";
import Calculators from './fire_calcs';


const mSTP = (state) => {
    return ({
        currentUserId: state.session.user.id
    })
}

const mDTP = (dispatch) => ({
  fetchEntries: () => dispatch(fetchEntries()),
  updateFiNum: (user, fireNum) => dispatch(updateFiNum(user, fireNum)),
  updateYearsToFI: (userId, yearsToFI) => dispatch(updateYearsToFI(userId, yearsToFI))
});

export default connect(mSTP, mDTP)(Calculators);