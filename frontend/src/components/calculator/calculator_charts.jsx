
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
    let data = [
      { name: "FLAME", fireNum: this.props.fireNum, fiYears: this.props.yearsToFI }
    ]
    return (
      <div className="fi-chart-box">
        <ResponsiveContainer width="55%" height="65%">
          <BarChart
            className="calc-bar-chart"
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend left={10} />
            <Bar dataKey="fireNum" fill="rgb(40, 200, 50)" />
            <Bar dataKey="fiYears" fill="rgb(230, 60, 40)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

}

export default CalculatorCharts;

