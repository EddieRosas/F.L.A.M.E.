import React from 'react';
import ReplyItem from './reply_item';

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
      
    } = this.props;

    return (
      <div>

      </div>
    );
  }
}

export default ReplyIndex;