import React from "react";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

function Forms(props) {
    const {author, handleChange, handleSubmit, value }=props;
    
//     const [name,setName] = React.useState(intialName)
    
//   //handler
//   function handleSubmit(e){
//     e.preventDefault();
//     onSubmitProp({name,value});
//  } 


  
  return (
    <Paper elevation={3}>
    <form onSubmit={handleSubmit} className="container-fluid p-3 bg-light rounded-5">
        <div className="row mb-3">
            <div className="col-md-2 text-center align-self-center fw-semibold">
                Title:
            </div>
            <div className="col-md-9 ">
                <input  name="name" type="text" onChange={ handleChange}
                       value={author.name} className="form-control"/>
            </div>
        </div>
        <div className="row mb-3">
            <input type="submit" value={value} className="btn btn-dark btn-block w-50 mx-auto"/>
            <Link className="btn btn-light " to="/">Cancel</Link>
        </div>

    </form>
   


    
</Paper>
  );
}

export default Forms;
