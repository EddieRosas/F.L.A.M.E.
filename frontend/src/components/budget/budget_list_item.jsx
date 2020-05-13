import React from 'react';
import Modal from 'react-modal';

const BudgetListItem = ({ deleteEntry, updateEntry, entry }) => {

  /*  <Modal isOpen={true}>
        <h2>Hello</h2>
      </Modal>  
  */
  return (
    <section>
      <p>Amount: {entry.amount.$numberDecimal}</p>
      <p>{entry.incomeOrDebt ? "Income" : "Debt"}</p>
      <p>Description: {entry.description}</p>
      <p>Category: {entry.category}</p>
      <p>Date: {entry.date}</p>
      <label>Delete:
        <button onClick={() => deleteEntry(entry._id)}>Delete</button>
      </label>
      <label>Update: 
        <button>Edit</button>
      </label>
    </section>
  )
}

export default BudgetListItem;