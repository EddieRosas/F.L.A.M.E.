import React, { useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const ReplyItem = ({ reply, deleteReply, updateReply, currentUser, postId }) => {
  return (
    <ListGroupItem>
      <div>
        <p>{reply.description}</p>
      </div>
    </ListGroupItem>
  );
}

export default ReplyItem;