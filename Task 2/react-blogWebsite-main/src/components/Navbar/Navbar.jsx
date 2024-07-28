import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
        <h2 className='nav-brand'>Blog Insights</h2>
        <ul className='menu'>
            <li><Link to="/" className='menu-btn btn1'>Home</Link></li>
            <li><Link to="/newblog" className='menu-btn btn2'>New Blog</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
