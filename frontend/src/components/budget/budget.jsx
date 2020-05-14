import React from 'react';
import BudgetListContainer from './budget_list_container.js';
import BudgetFormContainer from './budget_form_container.js';
import "./budget.css";

class BudgetComponent extends React.Component {

  render() {
    return (
      <div className="budget-page">
        <BudgetFormContainer className="budget-form-view"/>
        <br />
        <BudgetListContainer className="budget-list-view"/>
      </div>
    );
  }
}

export default BudgetComponent;