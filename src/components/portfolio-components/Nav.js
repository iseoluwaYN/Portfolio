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
                    <Link to='/'><b>About me</b></Link>
                    <Link to='/skills'><b>Skills</b></Link>
                    <Link to='/services'><b>Services</b></Link>
                    <Link to='/projects'><b>Projects</b></Link>

                </div>
            </div>

            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route path="/portfolio" element={<Projects/>}/>
            </Routes>
        </Router>

    );
};

export default Nav;
