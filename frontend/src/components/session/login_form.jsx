import React from "react";
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";

toast.configure();
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }


  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.login(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      username: "mcMonies",
      password: "password"
    }
    this.props.login(demoUser);
  }


  render() {
    return (
      <div className="login-box">
        <form onSubmit={this.handleSubmit} id="login-form">
          <p id="login-title">LOGIN</p>
          <div id="login-input-fields">
            <label id="login-label">USERNAME</label>
            <input
              id="input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="*required field"
            />
            <label id="login-label">PASSWORD</label>
            <input
              id="input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="*required field"
            />
            <br />
            <input id="submit-button" type="submit" value="Submit" />
            <label id="demo-button" onClick={this.handleDemo}>Demo Login</label>
            <Link to="/" id="session-go-back">
              X
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;