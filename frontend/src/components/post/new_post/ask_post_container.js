import { connect } from "react-redux";
import AskPost from "./ask_post";
import {
  fetchPost,
  updatePost,
  createPost,
} from "../../../actions/post_actions";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.session.user,
  };
};

const mDTP = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  updatePost: (post) => dispatch(updatePost(post)),
  createPost: (post) => dispatch(createPost(post))
});

export default connect(mSTP, mDTP)(AskPost);
