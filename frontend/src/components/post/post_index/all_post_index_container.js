import { connect } from 'react-redux';
import AllPostIndex from './all_post_index.jsx';
import {
  fetchPosts,
  fetchPost,
  createPost
} from '../../../actions/post_actions';

const mSTP = (state) => ({
  currentUser: state.session.user,
});

// const mSTP = (state) => ({
//   currentUser: state.session.user,
//   posts: Object.values(state.post),
// });

const mDTP = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  createPost: (post) => dispatch(createPost(post))
});

export default connect(mSTP, mDTP)(AllPostIndex);