import React from 'react';
import "./calculator.css";
import CalculatorChartsComponent from './calculator_charts.jsx'

class Calculators extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        fireNum: 0,
        yearsToFI: 0

      }

      this.submitFireNum = this.submitFireNum.bind(this);
      this.submitYearsToFI = this.submitYearsToFI.bind(this);
    }

    componentDidMount() {
      this.props.fetchEntries();
      this.setState({ fireNum: 0 })
    }

    // most basic formulas

    fireNumber = () => {

        let annualSpending = document.getElementById("fi-input-expenses").value;
        let withdrawalRate = document.getElementById("fi-input-withdrawls").value

        let fireNum = ( annualSpending * (100 / withdrawalRate) )
        
        this.setState({ fireNum: fireNum })
        this.setState({ yearsToFI: 0 })
        // document.getElementById("fire-num-result").innerHTML = `FIRE Number: $${fireNum} `;
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
        
        this.setState({ yearsToFI: years });
        this.setState({fireNum: 0 })
        // document.getElementById(
        //   "years-to-fi-result"
        // ).innerHTML = `Years to F.I.: ${years} years`;
    }

    submitFireNum(e) {
      e.preventDefault();
      this.props.updateFiNum(this.props.currentUserId, this.state.fireNum)
    }

    submitYearsToFI(e) {
      e.preventDefault();
      this.props.updateYearsToFI(this.props.currentUserId, this.state.yearsToFI);
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
                  <p id="input-title">Annual Withdrawal Rate (%)</p>
                  <input
                    id="fi-input-withdrawls"
                    type="number"
                    min="3"
                    defaultValue={4}
                  />
                  <br />
                  <button id="fi-submit" type="submit">
                    Calculate
                  </button>
                </form>
                <p id="fire-num-result">Fire Number: ${this.state.fireNum}</p>
                <button
                  onClick={this.submitFireNum}
                  className={
                    this.state.fireNum === 0
                      ? "fire-num-submit-disabled"
                      : "fire-num-submit"
                  }
                  disabled={this.state.fireNum === 0}
                >
                  Save Number To Profile
                </button>
              </div>
              <div className="years-to-fi-calc"></div>
              <h2 id="fi-num-title">Financial Independence Calculator</h2>
              <form id="fi-years-form" onSubmit={this.yearsToFI}>
                <p id="input-title">Annual Income (post-tax)</p>
                <input id="fi-input-income" type="number" min="0" />
                <p id="input-title">Estimated Annual Expenses</p>
                <input id="fi-input-expenses2" type="number" min="0" />
                <p id="input-title">Annual Withdrawal rate (%)</p>
                <input
                  id="fi-input-withdrawls2"
                  type="number"
                  min="3"
                  defaultValue={4}
                />
                <br />
                <button id="fi-submit" type="submit">
                  Calculate
                </button>
              </form>
              <p id="years-to-fi-result">Years to F.I: {this.state.yearsToFI} years</p>
              <button
                onClick={this.submitYearsToFI}
                className={
                  this.state.yearsToFI === 0
                    ? "years-to-fi-submit-disabled"
                    : "years-to-fi-submit"
                }
                disabled={this.state.yearsToFI === 0}
              >
                Save Years To Profile
              </button>
            </div>
            <CalculatorChartsComponent
              fireNum={this.state.fireNum}
              yearsToFI={this.state.yearsToFI}
            />
          </div>
        );
    }

}

export default Calculators;
