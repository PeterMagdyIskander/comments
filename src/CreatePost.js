import React, { useState } from "react";
function CreatePost(props) {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  function submitPost(event) {
    props.onAdd(data);
    setData({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="form">
      <textarea
        name="content"
        onChange={handleChange}
        value={data.content}
        placeholder="PogO Who asked"
        className="text-area"
      />
      <button onClick={submitPost} className="submit-btn">Post</button>
    </div>
  );
}
export default CreatePost;
