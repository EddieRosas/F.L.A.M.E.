import React from 'react';

class AskPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit() {
    //this.props.createPost(this.state)
    //  .then(() => this.props.changeModalStatusForAsk(false));
  }

  render() {
    return null;
  }

}