import React from 'react'
import { useHistory , useParams} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';





function Showing(props) {
    const [author,setAuthor] = useState({name:""});
    const { id } = useParams();
    const history = useHistory();
    
    React.useEffect(() => {
      axios
      .get("http://localhost:8000/api/author/"+id)
      .then((res) => {
      setAuthor(res.data.result);
     
      })
      .catch((err) => console.log(err));
    }, []);
  

//to edit path
   function editAuthor(e,_id){
    e.preventDefault()
    history.push("/edit/"+_id )
    
   }
  return (
    <div className="container w-50 py-4">
    <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">
        
        <h1>show </h1> <Link className="m-3" to="/">Home</Link>
        <div >
            <div >
                
                <p>Name: {author.name}</p>
                 <button className="btn btn-outline-dark" onClick={(e) => editAuthor(e,author._id)}>Edit</button> 

            </div>
        </div>
        
    </div>
    </div>
    
  )
}

export default Showing