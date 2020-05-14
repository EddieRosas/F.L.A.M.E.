import React from 'react';
import Modal from 'react-modal';
import "./budget.css"

const BudgetListItem = ({ deleteEntry, updateEntry, entry }) => {

  return (
    <section className ="budget-list-item-box">
      <p>{entry.amount.$numberDecimal}</p>
      <p>{entry.incomeOrDebt ? "Income" : "Debt"}</p>
      <p id="item-description"> {entry.description}</p>
      <p>{entry.category}</p>
      <p>{entry.date}</p>
      <label>
        <button onClick={() => deleteEntry(entry._id)}>Delete</button>
      </label>
      <label>
        <button>Edit</button>
      </label>
    </section>
  )
}

export default BudgetListItem;