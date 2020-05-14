import React from 'react';
import BudgetListItem from './budget_list_item.jsx';
import "./budget.css";

class BudgetList extends React.Component {
  componentDidMount() {
    this.props.fetchEntries();
  }


  // componentDidUpdate(prevProps, prevState) {
  //   if ((prevProps.entries.length === this.props.entries.length) && 
  //     !(prevProps.entries.length === 0 && this.props.entries.length === 0)) {
  //     this.props.fetchEntries();
  //   }
  // }
  
  render() {
    const { deleteEntry, updateEntry, entries } = this.props;
    if(!entries.length) {
      return null;
    }
    return (
      <div className="budget-list-box">
        <div className="budget-list-container">  
          <h1 id="budget-list-title">Budget List</h1>
          <div id="budget-list">
            <div className="budget-list-top">
              <p>Amount</p>
              <p>Type</p>
              <p>Description</p>
              <p>Category</p>
              <p>Date</p>
              <p></p>
              <p></p>
            </div>
            {entries.map((entry) => {
              return (
                <BudgetListItem
                  key={entry._id}
                  entry={entry}
                  deleteEntry={deleteEntry}
                  updateEntry={updateEntry}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default BudgetList;