import React from 'react';

const BudgetListItem = ({ deleteEntry, updateEntry, entry }) => {
  return (
    <section>
      <p>Amount: {entry.amount}</p>
      <p>Income or Debt: {entry.incomeOrDebt}</p>
      <p>Description: {entry.description}</p>
      <p>Category: {entry.category}</p>
      <p>Date: {entry.date}</p>
      <label>Delete:
        <button onClick={deleteEntry(entry.id)}>Delete</button>
      </label>
      <label>Update: 
        <button>Update</button>
      </label>
    </section>
  )
}

export default BudgetListItem;