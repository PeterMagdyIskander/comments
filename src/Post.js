import React,{useState} from 'react';
function Post(props){
    function handleClick() {
      props.onDelete(props.id);
    }
    return(
      <div className="post">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button onClick={handleClick}> delete post</button>
      </div>
    )
  }
  
  export default Post;