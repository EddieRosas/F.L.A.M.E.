import { connect } from 'react-redux';
import AllPostIndex from './all_post_index.jsx';
import {
  fetchPosts,
  fetchPost,
  createPost
} from '../../../actions/post_actions';

const mSTP = (state) => ({
  posts: Object.values
});