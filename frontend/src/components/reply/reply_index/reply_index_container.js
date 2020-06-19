import { connect } from 'react-redux';
import ReplyIndex from './reply_index';
import {
  fetchReplies,
  fetchReply,
  createReply,
  deleteReply,
  updateReply
} from '../../../actions/reply_actions';

const mSTP = (state, ownProps) => {
  return {
    answers: Object.values(state.reply),
    postId: ownProps.match.params.postId,
    currentUser: state.session.user
  }
};

const mDTP = (dispatch) => {
  return {
    fetchReplies: (postId) => dispatch(fetchReplies(postId)),
    fetchReply: (replyId) => dispatch(fetchReply(replyId)),
    createReply: (reply) => dispatch(createReply(reply)),
    deleteReply: (replyId) => dispatch(deleteReply(replyId)),
    updateReply: (reply) => dispatch(updateReply(reply))
  }
};

export default connect(mSTP, mDTP)(ReplyIndex);
