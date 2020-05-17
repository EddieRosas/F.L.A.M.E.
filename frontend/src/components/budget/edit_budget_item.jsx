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
      _id: this.props.entry._id,
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
    // const { setModalIsOpen } = this.props;
    return (
      <section>
        <p id="edit-title">Update Item</p>
        <form onSubmit={this.handleSubmit} action="">
          <input
            id="edit-input"
            type="number"
            value={this.state.amount}
            onChange={this.update("amount")}
            placeholder="Amount"
            step="0.01"
          />
          <br />
          <select id="edit-select" onChange={this.update("incomeOrDebt")}>
            <option
              value="true"
              selected={this.state.incomeOrDebt ? "selected" : ""}
            >
              Income
            </option>
            <option
              value="false"
              selected={!this.state.incomeOrDebt ? "selected" : ""}
            >
              Debt
            </option>
          </select>
          <br />
          <input
            id="edit-input"
            type="text"
            value={this.state.description}
            onChange={this.update("description")}
            placeholder="Description"
          />
          <br />
          <select id="edit-select" onChange={this.update("category")}>
            <option
              value="Health-Fitness"
              selected={
                this.state.category === "Health-Fitness" ? "selected" : ""
              }
            >
              Health & Fitness
            </option>
            <option
              value="Groceries"
              selected={this.state.category === "Groceries" ? "selected" : ""}
            >
              Groceries
            </option>
            <option
              value="Mortgage"
              selected={this.state.category === "Mortgage" ? "selected" : ""}
            >
              Mortgage
            </option>
            <option
              value="Entertainment"
              selected={
                this.state.category === "Entertainment" ? "selected" : ""
              }
            >
              Entertainment
            </option>
            <option
              value="Paycheck"
              selected={this.state.category === "Paycheck" ? "selected" : ""}
            >
              Paycheck
            </option>
            <option
              value="Dividends"
              selected={this.state.category === "Dividends" ? "selected" : ""}
            >
              Dividends
            </option>
            <option
              value="Other"
              selected={this.state.category === "Other" ? "selected" : ""}
            >
              Other
            </option>
          </select>
          <br />
          <input
            id="edit-calendar"
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