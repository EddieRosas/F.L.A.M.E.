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
      userId: this.props.currentUser.id,
      amount: this.state.amount,
      incomeOrDebt: this.state.incomeOrDebt,
      description: this.state.description,
      category: this.state.category,
      date: this.state.date,
    };
    //this.props.createEntry(entry);
  }

  render() {
    return (
      <div>
        <h1>Budget Form</h1>
        <form onSubmit={this.handleSubmit}>
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
            <option value="income">Income</option>
            <option value="debt">Debt</option>
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
            <option value="health-fitness">Health & Fitness</option>
            <option value="groceries">Groceries</option>
            <option value="mortgage">Mortgage</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
          <br />
          <input
            type="date"
            value={this.state.date}
            onChange={this.update("date")}
          />
        </form>
      </div>
    );
  }

}

export default BudgetForm;