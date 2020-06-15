import React from 'react';
import BudgetListItem from './budget_list_item.jsx';
import { Pagination } from "./pagination";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./budget.css";
import "./chart.css";

class BudgetList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currPage: 1,
      entriesPerPage: 5
    }

    this.paginate = this.paginate.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchEntries();
  }

  paginate(pageNumber) {
    this.setState({ currPage: pageNumber })
  }
  
  render() {
    const { deleteEntry, updateEntry, entries } = this.props;
    if(!entries.length) {
      return null;
    }

    // Get current Posts
    const idxLastEntry = this.state.currPage * this.state.entriesPerPage;
    const idxFirstEntry = idxLastEntry - this.state.entriesPerPage;
    const currEntries = entries.slice(idxFirstEntry, idxLastEntry)
    
    return (
      <div className="budget-list-box">
        <div className="budget-list-container">
          <h1 id="budget-list-title">Income/Expense Tracker</h1>
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
            {currEntries.map((entry) => {
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
          <Pagination 
            entriesPerPage={ this.state.entriesPerPage } 
            totalEntries={ entries.length }
            paginate={ this.paginate }
          />
        </div>
        <div className="chart">
          <ResponsiveContainer
            id="responsive-chart"
            width={'85%'}
            height={400}
          >
            <BarChart
              className="bar-chart"
              width={900}
              height={500}
              data={this.props.data}
              color="black"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip id="tooltip" cursor={{ fill: "rgba(255, 255, 255, 0.2)" }} />
              <Legend />
              <Bar dataKey="income" fill="rgb(40, 200, 50)" />
              <Bar dataKey="expenses" fill="rgb(230, 60, 40)" />
            </BarChart>
          </ ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default BudgetList;