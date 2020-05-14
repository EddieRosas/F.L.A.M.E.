import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="session-buttons">
          <Link id="profile-link" to={"/profile"}>Profile</Link>
          &nbsp;
          <Link to={"/calculators"}>FI Calculators</Link>
          &nbsp;
          <button id="logout-button" onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="session-buttons">
          <Link to={"/login"} id="login-button">LOGIN</Link>
          <Link to={"/signup"} id="signup-button">SIGNUP</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar-box">
        <div className="title-box">
          <h1 className="user-profile-header">FLAME</h1>
          <h2 className="title-name">Financial Literacy and Manage Everything</h2>
        </div>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
