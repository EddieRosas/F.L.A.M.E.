// need to uncomment out createEntry
import React from "react";

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      incomeOrDebt: "",
      description: "",
      category: "",
      date: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let entry = {
      //userId: this.props.currentUser.id,
      amount: this.state.amount,
      incomeOrDebt: this.state.incomeOrDebt,
      description: this.state.description,
      category: this.state.category,
      date: this.state.date,
    };
    this.props.createEntry(entry);
  }

  render() {
    return (
      <div className="budget-form-box">
        <h1 id="budget-form-title">Budget Form</h1>
        <form className="budget-form" onSubmit={this.handleSubmit}>
          <input
            id="budget-amount"
            type="number"
            value={this.state.amount}
            onChange={this.update("amount")}
            placeholder="Amount"
            step="0.01"
            autoComplete="off"
          />
          <br />
          <select id="budget-select" onChange={this.update("incomeOrDebt")}>
            <option id="budget-dropdown-first" value="" disabled selected>
              Income or Debt?
            </option>
            <option value="true">Income</option>
            <option value="false">Debt</option>
          </select>
          <br />
          <input
            id="budget-description"
            type="text"
            value={this.state.description}
            onChange={this.update("description")}
            placeholder="Description"
            autoComplete="off"
          />
          <br />
          <select id="budget-select" onChange={this.update("category")}>
            <option
              id="budget-dropdown-first"
              value="category"
              disabled
              selected
            >
              Choose Category
            </option>
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
            id="budget-date"
            type="date"
            value={this.state.date}
            onChange={this.update("date")}
          />
          <br />
          <button id="budget-submit" type="submit">
            Add Entry
          </button>
        </form>
      </div>
    );
  }

}

export default BudgetForm;