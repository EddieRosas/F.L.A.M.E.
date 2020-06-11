import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-modal";

class AllPostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModalForNewPost: false,
    }
  }

  componentDidMount() {

  }

  changeModalStatus(status) {
    this.setState({ openModalForNewPost: status });
  }

  render() {
    
  }
}

export default AllPostIndex;