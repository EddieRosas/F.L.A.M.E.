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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newEntry = {
      amount: this.state.amount,
      incomeOrDebt: this.state.incomeOrDebt,
      description: this.state.description,
      category: this.state.category,
      date: this.state.date,
    };
    this.props.updateEntry(newEntry);
    this.props.setModalIsOpen(false);
  }

  render() {
    const { setModalIsOpen } = this.props;
    return (
      <section>
        <h1>Update Item</h1>
        <form onSubmit={this.handleSubmit} action="">
          <input
            type="number"
            value={this.state.amount}
            onChange={this.update("amount")}
            placeholder="Amount"
            step="0.01"
          />
          <br />
          <select onChange={this.update("incomeOrDebt")}>
            <option value=""></option>
            <option value="true">Income</option>
            <option value="false">Debt</option>
          </select>
          <br />
          <input
            type="text"
            value={this.state.description}
            onChange={this.update("description")}
            placeholder="Description"
          />
          <br />
          <select onChange={this.update("category")}>
            <option value=""></option>
            <option value="Health-Fitness">Health & Fitness</option>
            <option value="Groceries">Groceries</option>
            <option value="Mortgage">Mortgage</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Paycheck">Paycheck</option>
            <option value="Dividends">Dividends</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <input
            type="date"
            value={this.state.date}
            onChange={this.update("date")}
          />
          <br />
          <button type="submit">Update</button>
        </form>
      </section>
    );
  }
}

export default EditBudgetItem;