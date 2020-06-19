import React from 'react';
import ReplyItem from './reply_item';
import ListGroup from 'react-bootstrap/ListGroup';

class ReplyIndex extends React.Component {

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

  render() {
    const {
      replies,
      deleteReply,
      updateReply,
      currentUser,
      postId
    } = this.props;

    return (
      <div>
        <h4>Replies</h4>
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