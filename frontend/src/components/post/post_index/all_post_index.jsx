import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from "react-bootstrap/ListGroup";
import { Nav, NavItem } from 'react-bootstrap';
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
      <div className="post-index-component">
        <Nav
          className="nav-bar-index"
          activeKey="/home"
          // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link eventKey="posts">
              All Posts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="questions">
              Questions
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="stories">
              Stories
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="popular">
              Popular
            </Nav.Link>
          </Nav.Item>
        </Nav>
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
      </div>
    );
  }
}

export default AllPostIndex;