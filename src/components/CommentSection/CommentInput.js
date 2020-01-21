import React from "react";
import './Comment.css';

const CommentInput = props => {
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add a comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
