import React from 'react';
import BudgetListItem from './budget_list_item.jsx';
import "./budget.css"
import { json } from 'body-parser';

class BudgetList extends React.Component {
  componentDidMount() {
    this.props.fetchEntries();
  }

  componentDidUpdate(prevProps, prevState) {

    // we do === prevProps and this.props because when we first render the budget page, our entries
    // in render destructuring in props is empty array, and that componentWillMount fetchEntries
    // will help us refresh our data. Our props entries has things now. ComponentDidUpdate will be called 
    // afterwards, and we know our prevProps for entry is [] and now this.props.entries has things. We don't 
    // need to call fetchEntries again.

    // this.props will not update until fetchEntries is called, therefore if prevProps and this.props is same,
    // we have to double check
    if (JSON.stringify(prevProps.entries.length) === JSON.stringify(this.props.entries.length)) {
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