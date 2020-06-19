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

