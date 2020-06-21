import React from 'react';
import ReplyItem from './reply_item';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import Modal from "react-modal";
import './reply_index.css';

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
    this.state({ modalOpenNewReply: status });
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
          >
            Create New Reply
            </Button>
        </div>
        <ListGroup>
          {replies.map((reply) => (
            <ReplyItem key={reply._id}
                       reply={reply}
                       currentUser={currentUser}
                       deleteReply={deleteReply}
                       updateReply={updateReply}
                       postId={postId}
            />
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default ReplyIndex;