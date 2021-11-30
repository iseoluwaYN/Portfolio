import React from 'react';
import '../style/Nav.css' ;
import Home from '../portfolio-components/Home';
import Projects from '../portfolio-components/Project';
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom"

const Nav = () => {
    return (
        <Router>
            <div className='nav'>
                <h1>Iseoluwa</h1>

                <div className='navItem'>
                    <Link to='/'>About me</Link>
                    <Link to='/skills'>Skills</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/projects'>Projects</Link>

                </div>
            </div>

            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </Router>

    );
};

export default Nav;
