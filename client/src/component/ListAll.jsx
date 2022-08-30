import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Paper } from "@material-ui/core";




function ListAll(props) {
 
  const history =useHistory();
  const [authors, setAuthors] = React.useState([]);
  const [flag,setFlag]=React.useState(false);
  console.log(authors);
  
  
  
  //==========fetch for data=================
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, [flag]);

  //================ Delete auth and update the list in DOM by sending data to main===========
  function deleteauthor (e,id)  {
      axios.delete("http://localhost:8000/api/authors/deletebyId/"+id)
                  .then(res => {
                    console.log(res)
                    if(flag){
                        setFlag(false);
                    }else{
                        setFlag(true);
                    }
                  }).catch(err=>console.log(err));      
      };
      
  return (
    <Paper elevation={3}>
      <div className="p-4 rounded container-fluid bg-light text-center fw-bolder"> 
      
        <h1 >List All Authors</h1>
        <Link className="m-3" to="/new"> create new author </Link>
      </div>
      <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">

        <ul  >
          {authors.map((author,i) => 
            <li key={i}  >
            <div  >
              <div className="row">
                <div className="col">
                      <Link to={"/author/"+author._id}>{author.name}</Link><br/>

                  </div>
                  <div className="col ">
                      <Button ><Link to={"/edit/"+author._id}>Edit</Link></Button>
                      <Button  onClick={(e)=>{deleteauthor(e,author._id)}}> delete </Button>

                  </div>
                </div>
              <hr />

              </div> 
           
            </li>
          )} 
        </ul>
      </div>
    </Paper>
  );
}

export default ListAll;
