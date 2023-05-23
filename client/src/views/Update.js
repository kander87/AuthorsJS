import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import AuthorForm from '../components/AuthorForm';
import { Link } from 'react-router-dom' //this is new


const Update = (props) => {
  const navigate = useNavigate() //not here before
  const { id } = useParams()

    const [name, setName] = useState('');

    useEffect(() => {
              axios.get('http://localhost:8000/api/edit/' + id)
                  .then(res => {
                      setName(res.data.name);
                  })
          }, [id]);
  
        const updateAuthor = name => {
              axios.put('http://localhost:8000/api/edit/' + id , name)
                  .then(res => console.log(res))
                  .catch(err => console.error(err));        
              navigate("/")    
          }
  
          return (
            <div>
            <h1>Favorite Authors</h1>
            <Link to="/"> Home</Link>
            <h3>Edit this author:</h3>
            <AuthorForm id={id} onSubmitProp={updateAuthor} initialName={name}/>
              </div>
          )
}
export default Update