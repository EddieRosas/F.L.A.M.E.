import React from "react";
import { Link, withRouter } from "react-router-dom";
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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
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

  renderErrors() {
    return (
      <div className="errors">
        <ul>
          {Object.keys(this.state.errors).map((error, i) => (
            <li id="error-item" key={`error-${i}`}>
              {this.state.errors[error]}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="signup-box">
        {this.renderErrors()}
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div id="input-fields">
            <br />
            <label id="label-email">EMAIL</label>
            <input
              id="input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="*required field"
            />
            <br />
            <label id="label">USERNAME</label>
            <input
              id="input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="*required field"
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
            <input id="submit-button" type="submit" value="Submit" />
            <Link to="/" id="session-go-back">
              back
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
