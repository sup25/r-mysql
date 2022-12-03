import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Book = () => {
    const [book, setBook] = useState([])

    useEffect(() => {
        const fetchAllBook = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books")
                setBook(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllBook()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/books/" + id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Supss Book Shop</h1>
            <div className="books" key={book.id}>
                {book.map(book => (
                    <div className="book">
                        {book.cover && <img src={book.cover} alt="" />}
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                        <button className='delete' onClick={() => handleDelete(book.id)}>Delete</button>
                        <button className='update'>Update</button>
                    </div>
                ))}
            </div>
            <button><Link to='/add'>Add new Book</Link></button>
        </div>
    )
}

export default Book