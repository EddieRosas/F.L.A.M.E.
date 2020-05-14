import React from 'react';
import Modal from 'react-modal';
import "./budget.css"

const BudgetListItem = ({ deleteEntry, updateEntry, entry }) => {

  return (
    <section className="budget-list-item-box">
      <p>${entry.amount.$numberDecimal}</p>
      <p>{entry.incomeOrDebt ? "Income" : "Debt"}</p>
      <p> {entry.description}</p>
      <p>{entry.category}</p>
      <p id="budget-list-date">{entry.date}</p>
      <label id="budget-item-change" onClick={() => deleteEntry(entry._id)}>
        <button id="budget-item-delete-button">Delete</button>
      </label>
      <label id="budget-item-change">
        <button id="budget-item-delete-button">Edit</button>
      </label>
    </section>
  );
}

export default BudgetListItem;