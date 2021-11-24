import React from 'react';
import '../components/style/Nav.css' ;
const Nav = () => {
    return (
        <div className='nav'>
            <h1>Iseoluwa</h1>

            <div className='navItem'>
                <a href=''>About</a>
                <a href=''>Services</a>
                <a href=''>Portfolio</a>
            </div>

        </div>
    );
};

export default Nav;
