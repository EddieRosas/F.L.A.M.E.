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

  render() {
    return null;
  }
}