import React from 'react';

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
          <div>
            <div className="fire-num-calc">
              <h2>Calculate your Fire Number</h2>
              <form onSubmit={this.fireNumber}>
                <p>Enter your estimated annual expenses</p>
                <text>$</text>&nbsp;
                <input id="fire-num-calc-expenses" type="number" min="0" />
                <p>Enter your withdrawal rate (mininum of 4% recommended)</p>
                <input id="fire-num-calc-rate" type="number" min="3" />
                &nbsp;
                <text>%</text>
                <br/>
                <br/>
                <button type="submit">Calculate</button>
              </form>
              <h3 id="fire-num-result"></h3>
            </div>
            <div className="years-to-fi-calc"></div>
            <h2>Calculate your years until Financial Independence</h2>
            <form onSubmit={this.yearsToFI}>
              <p>Enter your estimated annual income (post-taxes)</p>
              <text>$</text>&nbsp;
              <input id="years-to-fi-calc-income" type="number" min="0" />
              <p>Enter your estimated annual expenses</p>
              <text>$</text>&nbsp;
              <input id="years-to-fi-calc-expenses" type="number" min="0" />
              <p>Enter your withdrawal rate (mininum of 4% recommended)</p>
              <input id="years-to-fi-calc-rate" type="number" min="3" />
              &nbsp;
              <text>%</text>
              <br/>
              <br/>
              <button type="submit">Calculate</button>
            </form>
            <h3 id="years-to-fi-result"></h3>
          </div>
        );
    }

}

export default Calculators
