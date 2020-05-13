import React from "react";
import "./login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-box">
        <form onSubmit={this.handleSubmit} id="login-form">
          <div id="input-fields">
            <label>USERNAME</label>
            <input
              id="username-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <br />
            <label>PASSWORD</label>
            <input
              id="password-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input id="submit-login-button" type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

//export default withRouter(LoginForm);
export default LoginForm;