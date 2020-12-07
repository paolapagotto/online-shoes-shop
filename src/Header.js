import React, { Component } from 'react';

const Header = () => {

    return (
        <div className="navbar-fixed ">
            <nav>
            <div className="nav-wrapper teal lighten-3">
                <a href="#" className="brand-logo">Shoes Shop App</a>
                <ul className="right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Shop Cart</a></li>
                </ul>
            </div>
        </nav>
        </div>
        

    )

}

export default Header;