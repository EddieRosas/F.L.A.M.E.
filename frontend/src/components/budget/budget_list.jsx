import React from 'react';
import BudgetListItem from './budget_list_item.jsx';

class BudgetList extends React.Component {
  componentDidMount() {
    this.props.fetchEntries(this.props.currentUser.id);
  }
  
  render() {
    const { deleteEntry, updateEntry, entries } = this.props;
    return (
      <div>
        <h1>Budget List</h1>
        <div className="budget-list">
          {
            entries.map((entry) => (
              <BudgetListItem 
                entry={entry}
                deleteEntry={deleteEntry}
                updateEntry={updateEntry}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default BudgetList;