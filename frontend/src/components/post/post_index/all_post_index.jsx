import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-modal";
import AllPostItem from './all_post_item';
import "./post_index.css";

class AllPostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModalForNewPost: false,
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
    Modal.setAppElement("#root");
  }

  changeModalStatus(status) {
    this.setState({ openModalForNewPost: status });
  }

  render() {
    const {
      currentUser,
      posts,
      fetchPost,
      createPost,
    } = this.props;

    return (
      <div className="posts-list">
        <ListGroup variant="flush">
          {posts.map((post) => (
            <AllPostItem
              post={post}
              fetchPost={fetchPost}
              key={post._id}
            />
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default AllPostIndex;