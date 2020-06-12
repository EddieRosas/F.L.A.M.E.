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

  render() {
    return null;
  }

}