import React, { useState } from 'react';
import Modal from 'react-modal';
import "./budget.css";
import EditBudgetItem from './edit_budget_item.jsx';
Modal.setAppElement('#root');

const BudgetListItem = ({ deleteEntry, updateEntry, entry }) => {
  let dateObj = new Date(entry.date)
  let month = dateObj.getMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getFullYear();

  let newDate = month + "/" + day + "/" + year;

  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <section>
      <p>Amount: {entry.amount.$numberDecimal}</p>
      <p>{entry.incomeOrDebt ? "Income" : "Debt"}</p>
      <p>Description: {entry.description}</p>
      <p>Category: {entry.category}</p>
      <p>Date: {newDate}</p>
      <label>
        Delete:
        <button onClick={() => deleteEntry(entry._id)}>Delete</button>
      </label>
      <label>
        Update:
        <button onClick={() => setModalIsOpen(true)}>Edit</button>
      </label>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <EditBudgetItem 
          entry={entry} 
          updateEntry={updateEntry}
          setModalIsOpen={setModalIsOpen}
        />
      </Modal>
    </section>
  );
}

export default BudgetListItem;