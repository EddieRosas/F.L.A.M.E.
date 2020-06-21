import React from "react";
import Modal from "react-modal";
import { Button } from 'react-bootstrap';
import "./show_post.css"
import ReplyIndexContainer from '../../reply/reply_index/reply_index_container';


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
    const { post, currentUser, updatePost, createPost } = this.props;
    if (!post) {
      return null;
    }

    return (
      <div className="show-post-component">
        <div className="post-details">
          <div className="post-title-button">
            <h1 className="post-title">{post.title}</h1>
            <Button
              variant="outline-secondary"
              className="add-new-post-btn"
              onClick={() => this.changeModalStatusForAsk(true)}
            >
              Create New Post
            </Button>
          </div>
          <p className="post-desc">{post.description}</p>
        </div>
        <Modal
          isOpen={this.state.modalIsOpenForAsk}
          onRequestClose={() => this.changeModalStatusForAsk(false)}
          style={{
            content: {
              borderRadius: "7px",
            },
            overlay: {
              position: "fixed",
              zIndex: "50",
            },
          }}
        >
          <Button
            variant="outline-dark"
            onClick={() => this.changeModalStatusForAsk(false)}
          >
            Close
          </Button>
        </Modal>
        <ReplyIndexContainer postId={this.props.postId} />
      </div>
    );
  }
}

export default ShowPost;