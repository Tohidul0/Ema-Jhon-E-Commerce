import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='header-container'>
            
                <img src="../../../images/Logo.svg" alt="" />
                <nav>
                    <Link to="/Home">Home</Link>
                    <Link to="/Details">CartDetails</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </nav>
        
        </div>
    );
}

export default Header;