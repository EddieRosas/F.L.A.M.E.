import React from "react";
import Modal from "react-modal";

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpenForEdit: false,
      modalIsOpenForAsk: false,
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
    Modal.setAppElement("#root");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.postId !== this.props.postId) {
      this.fetchData(this.props.postId);
    }
  }

  fetchData(newId) {
    this.props.fetchPost(newId);
  }

  changeModalStatusForAsk(status) {
    this.setState({ modalIsOpenForAsk: status });
  }

  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    )
  }
}

export default ShowPost;