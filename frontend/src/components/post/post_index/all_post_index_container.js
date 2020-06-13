import { connect } from 'react-redux';
import AllPostIndex from './all_post_index.jsx';
import {
  fetchPosts,
  fetchPost,
  createPost
} from '../../../actions/post_actions';


const mSTP = (state) => ({
  currentUser: state.session.user,
  posts: Object.values(state.post),
});


//fetchPost: (postId) => dispatch(fetchPost(postId)),
const mDTP = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createPost: (post) => dispatch(createPost(post))
});

export default connect(mSTP, mDTP)(AllPostIndex);