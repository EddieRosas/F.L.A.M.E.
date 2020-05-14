import React from 'react';
import "./calculator.css";

class Calculators extends React.Component {

    // most basic formulas

    fireNumber = () => {

        let annualSpending = document.getElementById("fire-num-calc-expenses").value;
        let withdrawalRate = document.getElementById("fire-num-calc-rate").value

        let fireNum = ( annualSpending * (100 / withdrawalRate) )
        
        document.getElementById("fire-num-result").innerHTML = `Your fire number: $${fireNum} `;
    }

    yearsToFI = () => {

        let annualSpending = document.getElementById("years-to-fi-calc-expenses")
          .value;
        let withdrawalRate = document.getElementById("years-to-fi-calc-rate")
          .value;
        let annualIncome = document.getElementById("years-to-fi-calc-income").value;
        
        let fireNum = ( annualSpending * ( 100 / withdrawalRate ) );
        let annualSavings = ( annualIncome - annualSpending );
        let years = ( fireNum / annualSavings ) 
        
        document.getElementById(
          "years-to-fi-result"
        ).innerHTML = `Years until FI: ${years} years`;
    }

    render () {
        return (
          <div className="fi-box">
            <div className="fi-calculator-box">
              <div className="fire-num-calc">
                <h2>Fire Number Calculator</h2>
                <form id="fire-number-form" onSubmit={this.fireNumber}>
                  <p>Estimated Annual Expenses</p>
                  <text>$</text>&nbsp;
                  <input id="fire-num-calc-expenses" type="number" min="0" />
                  <p>Annual Withdrawal Rate (4% recommended)</p>
                  <input id="fire-num-calc-rate" type="number" min="3" />
                  &nbsp;
                  <text>%</text>
                  <br/>
                  <button type="submit">Calculate</button>
                </form>
                <h3 id="fire-num-result"></h3>
              </div>
              <div className="years-to-fi-calc"></div>
              <h2>Financial Independence Calculator</h2>
              <form id="fi-years-form" onSubmit={this.yearsToFI}>
                <p>Annual Income (post-tax)</p>
                <text>$</text>&nbsp;
                <input id="years-to-fi-calc-income" type="number" min="0" />
                <p>Estimated Annual Expenses</p>
                <text>$</text>&nbsp;
                <input id="years-to-fi-calc-expenses" type="number" min="0" />
                <p>Annual Withdrawal rate (4% recommended)</p>
                <input id="years-to-fi-calc-rate" type="number" min="3" />
                &nbsp;
                <text>%</text>
                <br/>
                <button type="submit">Calculate</button>
              </form>
              <h3 id="years-to-fi-result"></h3>
            </div>
            <div className="fi-chart-box">
              <p># maybe a neon green chart yanno like robinhood dark mode huehue</p>
            </div>
          </div>
        );
    }

}

export default Calculators
