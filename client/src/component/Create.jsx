import React from "react";
import axios from "axios";
import Forms from "./Forms";
import { useHistory } from "react-router-dom";


function Create(props) {

//=====initial==========
const [author,setAuthor] = React.useState({name:""})
const [data,setData]=React.useState([])
const history=useHistory();

//====================Functions=====================
function handelCange(e){
  setData(false)
  setAuthor({...author,[e.target.name]:e.target.value})
}  





function handleSubmit(e){
    e.preventDefault()
     axios.post("http://localhost:8000/api/authors/new",author)
     .then(res => {
      setData(res.data)
      history.push("/")  
      }).catch(err => console.log(err));
  
  }

  return (
    <div className="container w-50 py-4">

{/*  */}
    <header className="pb-3 mb-4 border-bottom">
        <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">
           Favorit Authors
        </div>
        <p>create new author:</p>
    </header>
{/*  */}

<Forms author={author}  handleChange={handelCange} handleSubmit={handleSubmit} />

    
</div>
  );
}

export default Create;
