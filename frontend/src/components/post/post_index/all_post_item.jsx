import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';
import "./post_index.css";

// commented out comments is code that should work if props are imported
//const AllPostItem = ({ post, fetchPost }) => {
const AllPostItem = ({ post }) => {
  return (
    <ListGroupItem>
      <div>
        <Link to={`/post/${post._id}`}>{post.title}</Link>
        <p>{post.description}</p>
      </div>
    </ListGroupItem>
  );
};

export default AllPostItem;