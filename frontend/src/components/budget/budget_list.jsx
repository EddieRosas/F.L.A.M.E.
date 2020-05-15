import React from 'react';
import BudgetListItem from './budget_list_item.jsx';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./budget.css";
import "./chart.css";

class BudgetList extends React.Component {
  componentDidMount() {
    this.props.fetchEntries();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if ((prevProps.entries.length === this.props.entries.length) && 
  //     !(prevProps.entries.length === 0 && this.props.entries.length === 0)) {
  //     this.props.fetchEntries();
  //   }
  // }
  
  render() {
    const { deleteEntry, updateEntry, entries } = this.props;
    if(!entries.length) {
      return null;
    }
    console.log(this.props)
    return (
      <div className="budget-list-box">
        <div className="budget-list-container">
          <h1 id="budget-list-title">Budget List</h1>
          <div id="budget-list">
            <div className="budget-list-top">
              <p>Amount</p>
              <p>Type</p>
              <p>Description</p>
              <p>Category</p>
              <p>Date</p>
              <p></p>
              <p></p>
            </div>
            {entries.map((entry) => {
              return (
                <BudgetListItem
                  key={entry._id}
                  entry={entry}
                  deleteEntry={deleteEntry}
                  updateEntry={updateEntry}
                />
              );
            })}
          </div>
        </div>
        <div className="chart">
          <BarChart
            className="bar-chart"
            width={900}
            height={500}
            data={this.props.data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="rgb(40, 200, 50)" />
            <Bar dataKey="expenses" fill="rgb(230, 60, 40)" />
          </BarChart>
        </div>
      </div>
    );
  }
}

export default BudgetList;