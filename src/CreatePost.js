import React,{useState} from 'react';
function CreatePost(props){
  
    const [data,setData]=useState({
      title: "",
      content: ""
    });
  
    function handleChange(event) {
      const { name, value } = event.target;
      setData((prevData) => {
        return {
          ...prevData,
          [name]: value
        };
      });
    }
    function submitPost(event) {
      props.onAdd(data);
      setData({
        title: "",
        content: ""
      });
      event.preventDefault();
    }
    return(
      <div >
      <form className="form">
      <input
          name="title"
          onChange={handleChange}
          value={data.title}
          placeholder="Title"
          />
        <textarea
          name="content"
          onChange={handleChange}
          value={data.content}
          placeholder="Take a note..."
        />
        <button onClick={submitPost}></button>
      </form>
    </div> 
    )
  }
  export default CreatePost;