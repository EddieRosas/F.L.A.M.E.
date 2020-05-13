import React from 'react';
import BudgetListItem from './budget_list_item.jsx';
import "./budget.css"
import { json } from 'body-parser';

class BudgetList extends React.Component {
  componentDidMount() {
    this.props.fetchEntries();
  }

  componentDidUpdate(prevProps) {
    //this.props.fetchEntries();
    if (JSON.stringify(prevProps.entries.length) !== JSON.stringify(this.props.entries.length)) {
      this.props.fetchEntries();
    }
  }
  
  render() {
    const { deleteEntry, updateEntry, entries } = this.props;

    if(!entries.length) {
      return null;
    }
    return (
      <div>
        <h1>Budget List</h1>
        <div className="budget-list">
          {
            entries.map((entry) => {
              return (<BudgetListItem
                key={entry._id}
                entry={entry}
                deleteEntry={deleteEntry}
                updateEntry={updateEntry}
              />)
            })
          }
        </div>
      </div>
    );
  }
}

export default BudgetList;