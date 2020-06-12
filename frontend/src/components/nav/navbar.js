import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Modal from 'react-modal';
import {BsFillQuestionSquareFill} from "react-icons/bs";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.changeModalStatus = this.changeModalStatus.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    
    if (this.props.loggedIn) {
      return (
        <div className="session-buttons">
          <Link id="budget-link" to={"/budget"}>
            Budget
          </Link>
          &nbsp;
          <Link id="calculator-link" to={"/calculators"}>
            FI Calculators
          </Link>
          &nbsp;
          <Link id="forum-link" to={"/forum"}>
            Forums
          </Link>
          &nbsp;
          <label id="logout-button" onClick={this.logoutUser}>
            Logout
          </label>
        </div>
      );
    } else {
      return (
        <div className="session-buttons">
          <Link
            className="modal-page"
            onClick={() => this.changeModalStatus(true)}
          >
            <BsFillQuestionSquareFill className="question-mark" />
          </Link>
          <Link to={"/login"} id="login-button">
            LOGIN
          </Link>
          <Link to={"/signup"} id="signup-button">
            SIGNUP
          </Link>
        </div>
      );
    }
  }

  changeModalStatus(status) {
      this.setState({
        modalIsOpen: status
      }) ;
  }

   render() {
    return (
      <div className="navbar-box">
        <div className="title-box">
          <Link to={"/"} className="user-profile-header">
            FLAME
          </Link>
          <h2 className="title-name">
            Financial Literacy and Manage Everything
          </h2>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => this.changeModalStatus(false)}
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "0",
                bottom: "0",
                overflow: "scroll",
                borderRadius: "10px",
                marginLeft: "-360px",
                marginTop: "-300px",
                width: "650px",
                height: "550px",
                background: "#f5f2D0",
              },
              overlay: {
                position: "fixed",
                backgroundColor: "rgba(0,0,0,0.7)",
                zIndex: "50",
              },
            }}
          >
            <p className="title">About</p>
            <p className="tutorial">
              &emsp;&emsp;FLAME is a finance app created by four engineers over
              the span of 5 days. Our goal was to provide an intuitive way for
              you to track your spending habits and work towards financial
              independence. FLAME aims to help anyone who is interested in the
              FIRE movement, or personal finance in general, get started on
              their path to financial freedom.
            </p>
            <p className="tutorial">
              &emsp;&emsp;You are able to create secure accounts by entering a valid username, password, and email
              address. Only the username and password will be required when
              logging in following this pre-requisite. We utilized the
              React-Toastify library to create smooth error notifications if
              any error occur during account creation or login.
            </p>
            <p className="tutorial">
              &emsp;&emsp;You are able to create, edit, and delete budget
              entries based on personal preference. Entering the date optionally
              defaults to the current day if nothing is entered. Flame doesn’t
              require users to input any of their banking information, simply
              enter their monthly income and spending.
            </p>
            <p className="tutorial">
              &emsp;&emsp;We carefully developed algorithms for our calculators
              to accurately provide your current financial standing, your
              projected years to financial freedom, and your FIRE Number to
              reach financial independence. We also implemented the Re-charts library to
              conveniently reflect your data.
            </p>
          </Modal>
          {/* this.changeModalStatus(true)}><BsFillQuestionSquareFill className="question-mark"/></Link> */}
        </div>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
