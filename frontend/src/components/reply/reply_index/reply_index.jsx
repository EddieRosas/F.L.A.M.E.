import React from 'react';
import ReplyItem from './reply_item';

class ReplyIndex extends React.Component {

  componentDidMount() {
    this.props.fetchReplies(this.props.postId);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default ReplyIndex;