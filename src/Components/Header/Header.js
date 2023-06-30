import React from 'react';
import './Header.css';
import img from '../../images/navbarimage.jpg';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <p className='nameTitle'>Knowledge Cafe</p>
                <div className='navInfo'>
                    <a href="/about">About</a>
                    <a href="/blog">Blog</a>
                    <a href="/login">Log in</a>
                    <img src={img} alt="" />
                </div>
            </nav>
            <hr className='hrLine'/>
        </div>
    );
};

export default Header;