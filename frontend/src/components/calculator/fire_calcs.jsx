import React from 'react';
import "./calculator.css";

class Calculators extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        fireNum: 0,
        yearsToFI: 0

      }
    }

    // most basic formulas

    fireNumber = () => {

        let annualSpending = document.getElementById("fi-input-expenses").value;
        let withdrawalRate = document.getElementById("fi-input-withdrawls").value

        let fireNum = ( annualSpending * (100 / withdrawalRate) )
        
        document.getElementById("fire-num-result").innerHTML = `FIRE Number: $${fireNum} `;
    }

    yearsToFI = () => {

        let annualSpending = document.getElementById("fi-input-expenses2")
          .value;
        let withdrawalRate = document.getElementById("fi-input-withdrawls2")
          .value;
        let annualIncome = document.getElementById("fi-input-income").value;
        
        let fireNum = ( annualSpending * ( 100 / withdrawalRate ) );
        let annualSavings = ( annualIncome - annualSpending );
        let years = ( fireNum / annualSavings ) || 0 
        
        document.getElementById(
          "years-to-fi-result"
        ).innerHTML = `Years to F.I.: ${years} years`;
    }

    render () {
        return (
          <div className="fi-box">
            <div className="fi-calculator-box">
              <div className="fire-num-calc">
                <h2 id="fi-num-title">Fire Number Calculator</h2>
                <form id="fire-number-form" onSubmit={this.fireNumber}>
                  <p id="input-title">Estimated Annual Expenses</p>
                  <input id="fi-input-expenses" type="number" min="0" />
                  <p id="input-title">Annual Withdrawal Rate</p>
                  <input id="fi-input-withdrawls" type="number" min="3" defaultValue={4} />
                  <br/>
                  <button id="fi-submit" type="submit">Calculate</button>
                </form>
                <h3 id="fire-num-result"></h3>
              </div>
              <div className="years-to-fi-calc"></div>
              <h2 id="fi-num-title">Financial Independence Calculator</h2>
              <form id="fi-years-form" onSubmit={this.yearsToFI}>
                <p id="input-title">Annual Income (post-tax)</p>
                <input id="fi-input-income" type="number" min="0" />
                <p id="input-title">Estimated Annual Expenses</p>
                <input id="fi-input-expenses2" type="number" min="0" />
                <p id="input-title">Annual Withdrawal rate</p>
                <input id="fi-input-withdrawls2" type="number" min="3" defaultValue={4} />
                <br/>
                <button id="fi-submit" type="submit">Calculate</button>
              </form>
              <h3 id="years-to-fi-result"></h3>
            </div>
            <div className="fi-chart-box">
              <p>-insert edgy neon green chart-</p>
            </div>
          </div>
        );
    }

}

export default Calculators
