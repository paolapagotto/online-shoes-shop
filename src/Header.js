import React from 'react';

const Header = ({ totalShoes }) => {

    return (
        <div className="navbar-fixed ">
            <nav>
            <div className="nav-wrapper teal lighten-3">
                <a href="#" className="brand-logo">ShoesApp</a>
                <ul className="right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Shop Cart<span className="new badge red lighten-2" data-badge-caption =""> {totalShoes} </span></a></li>
                </ul>
            </div>
        </nav>
        </div>
        

    )

}

export default Header;


