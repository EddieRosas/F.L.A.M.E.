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
    <section className="budget-list-item-box">
      <p>${entry.amount.$numberDecimal}</p>
      <p>{entry.incomeOrDebt ? "Income" : "Debt"}</p>
      <p id="budget-list-description">{entry.description}</p>
      <p>{entry.category}</p>
      <p id="budget-list-date">{newDate}</p>
      <label id="budget-item-change" onClick={() => deleteEntry(entry._id)}>
        <button id="budget-item-delete-button">Delete</button>
      </label>
      <label id="budget-item-change" onClick={() => setModalIsOpen(true)}>
        <button id="budget-item-delete-button">Edit</button>
      </label>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        id="update-modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "0",
            bottom: "0",
            overflow: "inherit",
            "borderRadius": "10px"
          },
          overlay: {
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: "50",
          },
        }}
      >
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