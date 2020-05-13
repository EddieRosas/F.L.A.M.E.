import React, { useState } from 'react';
import Modal from 'react-modal';
import "./budget.css";
import EditBudgetItem from './edit_budget_item.jsx';
Modal.setAppElement('#root');

const BudgetListItem = ({ deleteEntry, updateEntry, entry }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <section>
      <p>Amount: {entry.amount.$numberDecimal}</p>
      <p>{entry.incomeOrDebt ? "Income" : "Debt"}</p>
      <p>Description: {entry.description}</p>
      <p>Category: {entry.category}</p>
      <p>Date: {entry.date}</p>
      <label>
        Delete:
        <button onClick={() => deleteEntry(entry._id)}>Delete</button>
      </label>
      <label>
        Update:
        <button onClick={() => setModalIsOpen(true)}>Edit</button>
      </label>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h1>Update Item</h1>
        <EditBudgetItem 
          entry={entry} 
          updateEntry={updateEntry} 
        />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </section>
  );
}

export default BudgetListItem;