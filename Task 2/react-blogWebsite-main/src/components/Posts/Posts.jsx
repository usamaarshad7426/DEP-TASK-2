import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';
import Post from '../Post/Post';

const Posts = () => {

    const [blogs, setBlogs] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(res => {
            setBlogs(res.data.products)
            setRecords(res.data.products)
        })
        .catch(err => console.log(err))
    }, [])

    const getInputData = (event) => {
        setBlogs(records.filter(r => r.title.toLowerCase().includes(event.target.value.toLowerCase())))
    }

  return (
    <div className='posts'>
        <div className='search-container'>
            <input type="text" onChange={getInputData} placeholder='Search' className='search-input' />
        </div>

        <div className='blog-icon'>
            <h3>Blogs</h3>
        </div>

        <div className='posts-container'>
            {blogs.map((blog, index) => (
                <Post blog={blog} key={index} />
            ))}
        </div>
    </div>
  )
}

export default Posts
