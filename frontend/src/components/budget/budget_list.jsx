import React from 'react';

class BudgetList extends React.Component {
  componentDidMount() {
    this.props.fetchEntries(this.props.currentUser.id);
  }
  
  render() {
    const { fetchEntries, fetchEntry, deleteEntry, updateEntry } = this.props;
    return (
      <div>
        <h1>Budget List</h1>
        <div class="budget-list">
          
        </div>
      </div>
    );
  }
}

export default BudgetList;