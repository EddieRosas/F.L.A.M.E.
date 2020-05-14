import React from 'react';

class EditBudgetItem extends React.Component {
  constructor(props) {
    super(props);
    const { entry } = this.props;
    this.state = {
      amount: entry.amount.$numberDecimal,
      incomeOrDebt: entry.incomeOrDebt,
      description: entry.description,
      category: entry.category,
      date: entry.date
    };
  }

/* <p>Amount: {entry.amount.$numberDecimal}</p>
        <p>{entry.incomeOrDebt ? "Income" : "Debt"}</p>
        <p>Description: {entry.description}</p>
        <p>Category: {entry.category}</p>
        <p>Date: {entry.date}</p> */

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let entry = {
      amount: this.state.amount,
      incomeOrDebt: this.state.incomeOrDebt,
      description: this.state.description,
      category: this.state.category,
      date: this.state.date,
    };
    this.props.updateEntry(entry);
  }

  render() {
    const { entry, setModalIsOpen } = this.props;
    return (
      <section>
        <h1>Update Item</h1>
        <form action="">
          
        </form>
        <button onClick={() => setModalIsOpen(false)}>Update</button>
      </section>
    );
  }
}

export default EditBudgetItem;