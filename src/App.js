
import './App.css';
import { AiOutlineComment } from 'react-icons/ai';
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
    <div>
    <form>
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


function Post(props){
  function handleClick() {
    props.onDelete(props.id);
  }
  return(
    <div className="post">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      </button>
    </div>
  )
}


function App() {
  const [data, setData] = useState([]);

  function addData(newData) {
    setData((prevData) => {
      return [...prevData, newData];
    });
  }

  function deleteData(id){
    setData((prevData)=>{
      return prevData.filter((dataItem,index)=>{
        return index!==id;
      });
    });
  }

  
  return (
    <div className="App">
    <CreatePost onAdd={addData} />
      {data.map((dataItem,index)=>{
          return(
            <Post
              key={index}
              id={index}
              title={dataItem.title}
              content={dataItem.content}
              onDelete={deleteData}
            />
          )
        })}
    </div>
  )
}


export default App;




/*
<input className="btn" type="text" onChange={getData}></input>
      <div > <AiOutlineComment /><button  onClick={()=>setPost(true)}
      >Post</button></div>
       */