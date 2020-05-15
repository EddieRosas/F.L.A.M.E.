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
} from "recharts";
import "./calc_chart.css";

class CalculatorCharts extends React.Component {

  render() {
    return (
      <div className="fi-chart-box">
        <BarChart
          className="calc-bar-chart"
          width={700}
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
    );
  }

}

export default CalculatorCharts;

