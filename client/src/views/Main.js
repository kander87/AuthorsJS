import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom' //this is new

import axios from 'axios'
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import 'bootstrap/dist/css/bootstrap.css';


export default function Main(props) {
    const [author, setAuthor] = useState([])
    // const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(response => {
                setAuthor(response.data)
                // setLoaded(true)
            })
    }, [])


    //author? ternary statement in the return
    return (
        <div>


            {/* <AuthorForm /> */}
            <h1>Favorite Authors</h1>

            <Link to="/new">
                Add an author
            </Link>

            <h4>We have quotes by:</h4>
            <hr />
            <AuthorList />
            {/* {
                loaded && <AuthorList author={author} />
            } */}

        </div>
    )
}
