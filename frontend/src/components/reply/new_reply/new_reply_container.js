import { connect } from 'react-redux';
import NewReply from './new_reply';
import { createReply } from '../../../actions/reply_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.session.user,
  postId: ownProps.postId
});

const mDTP = (dispatch) => ({
  createReply: (reply) => dispatch(createReply(reply))
});

export default connect(mSTP, mDTP)(NewReply);