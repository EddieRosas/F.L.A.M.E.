import React from 'react';
import Button from 'react-bootstrap/Button';

class NewReply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      postId: this.props.postId,
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.createReply(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  loggedIn() {
    return (
      <div>
        <h4>Your reply</h4>
        <form onSubmit={this.handleSubmit}>
          <textarea col="30" row="8" onChange={this.update("description")} />
          <Button variant="outline-secondary">
            Add New Reply
          </Button>
        </form>
      </div>
    );
  }

  render() {
    return null;
  }
}