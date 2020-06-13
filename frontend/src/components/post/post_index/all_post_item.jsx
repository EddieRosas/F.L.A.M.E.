import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

// commented out comments is code that should work if props are imported
const AllPostItem = ({ post, fetchPost }) => {
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