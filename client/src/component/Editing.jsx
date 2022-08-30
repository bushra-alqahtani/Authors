import React,{useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import Forms from './Forms'


function Editing(props) {
  const [author,setAuthor]=React.useState({name:""})
  const [data,setData]=React.useState([])
  const { id } = useParams();//so it will come with its id in the link 
  const history = useHistory();// to return me to the main page

  //====================func=========================

    useEffect( () => {
        axios.get("http://localhost:8000/api/author/"+id) //get the bg link of finding auth by id
        .then(res => {
          setAuthor(res.data.result)
        }).catch(err => console.log(err));
    },[])
   

    const handelCange = (e) => {
      setData(false)
      setAuthor({ ...author, [e.target.name]: e.target.value })
  }
    const handleSubmit = (e) => {
      e.preventDefault()
        axios.put("http://localhost:8000/api/author/edit/"+id,author)
                    .then(res => {
                      console.log(res)
                        setData(res.data);

                        history.push("/")})
                        .catch(err => console.log(err));  }   
                            
    
  return (
    <div className="container w-50 py-4">
      <div className="p-4 rounded container-fluid bg-light text-center fw-bolder"> 
    <div>Editing Author</div>
 
   </div>
   <Forms author={author}  handleChange={handelCange} handleSubmit={handleSubmit} />
    </div>
    
  )
}

export default Editing