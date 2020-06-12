import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

// const AllQuestionsItem = ({ post, fetchPost }) => {
const AllPostItem = () => {
  return (
    <ListGroupItem>
      <div>
        {/* <Link to={`/post/${post.id}`}>{post.title}</Link>
        <p>{post.description}</p> */}
      </div>
    </ListGroupItem>
  );
}

export default AllPostItem;