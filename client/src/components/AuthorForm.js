import React, { useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


export default (props) => {
    //keep track of what is being typed via useState hook
    const navigate= useNavigate()
    const { initialName,  onSubmitProp, id } = props;    
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);


    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        //prevent default behavior of the submit
        // e.preventDefault();
        // //make a post request to create a new prodct and taking in the
        // //data types you used in your model
        axios.post('http://localhost:8000/api/new', {
            name
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        navigate('/')
    }
    //onsubmit for the form that runs the method above
    //onChange for each individual input that uses the setX and the value of X
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name: </label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={initialName}/>
                
            </p>
            {errors?.name && (
                <span className='text-danger'>{errors.name?.message}</span>
            )}
            <button onClick={(e)=> navigate('/')}> Cancel </button>
            <input type="submit"/>
        </form>
    )
}
