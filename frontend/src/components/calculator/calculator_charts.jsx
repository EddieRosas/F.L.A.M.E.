import React from 'react';
import "./calculator.css";
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
import "./calc_chart.css";

class CalculatorCharts extends React.Component {

  render() {
    return (
      <div className="fi-chart-box">
        <ResponsiveContainer width="55%" height="65%">
          <BarChart
            className="calc-bar-chart"
            // width={700}
            // height={500}
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
        </ResponsiveContainer>
      </div>
    );
  }

}

export default CalculatorCharts;

