import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",

    });
    const navigate = useNavigate()
    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleClick = async e => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8800/books", book);
            console.log(response)
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
    console.log(book)
    return (
        <div className='form'>
            <h1>Add New Book</h1>
            <input type="text" placeholder='title' onChange={handleChange} name='title' />
            <input type="text" placeholder='desc' onChange={handleChange} name='desc' />
            <input type="number" placeholder='price' onChange={handleChange} name='price' />
            <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
            <button className="formButton" onClick={handleClick}>ADD</button>
        </div>
    )
}

export default Add