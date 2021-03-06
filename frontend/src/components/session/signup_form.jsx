import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentDidUpdate(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }
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
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      username: "mcMonies",
      password: "password",
    };
    this.props.login(demoUser);
  }


  render() {
    return (
      <div className="signup-box">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <p id="signup-title">SIGN UP</p>
          <div id="input-fields">
            <br />
            <label id="label-email">EMAIL</label>
            <input
              id="input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="*required field"
              autoComplete="off"
            />
            <br />
            <label id="label">USERNAME</label>
            <input
              id="input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="*required field"
              autoComplete="off"
            />
            <br />
            <label id="label">PASSWORD</label>
            <input
              id="input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="*required field"
            />
            <br />
            <label id="label-confirm">CONFIRM PASSWORD</label>
            <input
              id="input"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="*required field"
            />
            <br />
            <input id="submit-button" type="submit" value="SUBMIT" />
            <label id="demo-button" onClick={this.handleDemo}>
              DEMO LOGIN
            </label>
            <Link to="/" id="signup-session-go-back">
              X
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
