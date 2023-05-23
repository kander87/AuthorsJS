import React from 'react'
import AuthorForm from '../components/AuthorForm'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom' //this is new



const Create = () => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/"> Home</Link>
            <h3>Add a new author:</h3>
            <AuthorForm />
        </div>
    )
}

export default Create