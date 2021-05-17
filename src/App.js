import "./App.css";
import { AiOutlineComment } from "react-icons/ai";
import React, { useState } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

function App() {
  const [data, setData] = useState([]);

  function addData(newData) {
    setData((prevData) => {
      return [...prevData, newData];
    });
  }

  function deleteData(id) {
    setData((prevData) => {
      return prevData.filter((dataItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <CreatePost onAdd={addData} />
      {data.map((dataItem, index) => {
        return (
          <Post
            key={index}
            id={index}
            content={dataItem.content}
            onDelete={deleteData}
          />
        );
      })}
    </div>
  );
}

export default App;

/*
<input className="btn" type="text" onChange={getData}></input>
      <div > <AiOutlineComment /><button  onClick={()=>setPost(true)}
      >Post</button></div>
       */
