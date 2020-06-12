import { connect } from "react-redux";
import ShowPost from './show_post'
import { fetchPost, updatePost, createPost } from '../../../actions/post_actions';

const mSTP = (state, ownProps) => {
  // question: state.entities.questions[ownProps.match.params.questionId], (post)
  // questionId: ownProps.match.params.questionId, (postId)
  return {
    currentUser: state.session.user
  };
};

const mDTP = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  updatePost: (post) => dispatch(updatePost(post)),
  createPost: (post) => dispatch(createPost(post))
});

export default connect(mSTP, mDTP)(ShowPost);

