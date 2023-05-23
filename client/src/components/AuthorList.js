import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom' //this is new
import 'bootstrap/dist/css/bootstrap.css';
// import DeleteButton from './DeleteButton'


const AuthorList = (props) => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [])

    const removeFromDom = authorId => {
            setAuthors(authors.filter(authors => authors._id !== authorId));
        }

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/delete/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Authors</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, index) => {
                            return (
                                <tr key={index}>
                                    <td >
                                        {author.name}
                                    </td>
                                    <td>
                                        <Link to={"/edit/" + author._id}>
                                            <button>Edit</button>
                                        </Link>
                                        |
                                        <button onClick={(e) => { deleteAuthor(author._id) }}>
                                            Delete
                                        </button>                                    
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


            {/* authors.map((author, idx) => {
            return (
            <p key={idx}>
                <Link to={"/" + author._id}>
                    {author.title}, {author.price}, {author.description}
                </Link>
                |
                <Link to={"/authormanager/" + author._id + "/edit"}>
                    Edit
                </Link>
                |
                <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
            </p>
            )
      })} */}
        </div>
    )
}

export default AuthorList;