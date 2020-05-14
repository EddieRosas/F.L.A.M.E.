import React from 'react';
import BudgetListItem from './budget_list_item.jsx';
import "./budget.css";

class BudgetList extends React.Component {
  componentDidMount() {
    debugger;
    this.props.fetchEntries();
    debugger;
  }

  componentDidUpdate(prevProps, prevState) {

    debugger;

    if (JSON.stringify(prevProps.entries.length) !== JSON.stringify(this.props.entries.length)) {
      debugger;
      this.props.fetchEntries();

    }
  }
  
  render() {
    const { deleteEntry, updateEntry, entries } = this.props;
    debugger;
    if(!entries.length) {
      debugger;
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