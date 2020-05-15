import { connect } from 'react-redux'
import { fetchEntries } from "../../actions/budget_table_actions";
import Calculators from './fire_calcs';


const mSTP = (state) => {


    let entries = Object.values(state.budgetTable);
    
    // let data = []


    // // iterate thru each object, check the month, and add expense or debt to 
    //     // corresponding category
    // let jan = 
        
    //     entries.forEach(entry => )

    // let feb
    // let mar
    // let apr
    // let may
    // let jun
    // let jul
    // let aug
    // let sept
    // let oct
    // let nov
    // let dec

    
    return ( 
      {
        entries: entries
      }
    );
}

const mDTP = (dispatch) => ({
  fetchEntries: () => dispatch(fetchEntries())
});

export default connect(mSTP, mDTP)(Calculators);