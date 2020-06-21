import React from 'react';
import ReplyItem from './reply_item';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import Modal from "react-modal";
import './reply_index.css';
import NewReplyContainer from '../new_reply/new_reply_container'

class ReplyIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpenNewReply: false
    }
  }


  componentDidMount() {
    this.props.fetchReplies(this.props.postId);
  }

  fetchData(newPostId) {
    this.props.fetchReplies(newPostId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.postId !== this.props.postId) {
      this.fetchData(this.props.postId);
    }
  }

  changeModalStatusNewReply(status) {
    this.setState({ modalOpenNewReply: status });
  }

  render() {
    const {
      replies,
      deleteReply,
      updateReply,
      currentUser,
      postId
    } = this.props;

    return (
      <div className="replies-index">
        <div className="replies-title-btn">
          <h4 className="replies-title">Replies</h4>
          <Button
            variant="outline-secondary"
            className="add-new-reply-btn"
            onClick={() => this.changeModalStatusNewReply(true)}
          >
            Create New Reply
          </Button>
        </div>
        <ListGroup>
          {replies.map((reply) => (
            <ReplyItem
              key={reply._id}
              reply={reply}
              currentUser={currentUser}
              deleteReply={deleteReply}
              updateReply={updateReply}
              postId={postId}
            />
          ))}
        </ListGroup>
        <Modal
          isOpen={this.state.modalOpenNewReply}
          onRequestClose={() => this.changeModalStatusNewReply(false)}
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
            onClick={() => this.changeModalStatusNewReply(false)}
          >
            Close
          </Button>
          <NewReplyContainer />
        </Modal>
      </div>
    );
  }
}

export default ReplyIndex;