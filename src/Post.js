import React, { useState } from "react";
function Post(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="post">
      <p>{props.content}</p>
      <button onClick={handleClick} className="delete-btn"> delete post</button>
    </div>
  );
}

export default Post;
