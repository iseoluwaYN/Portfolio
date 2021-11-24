import React from 'react';
import Nav from "./Nav";
import '../style/Container.css';
import Home from "./Home";
import Project from "./Project";

const Container = () => {
    return (
        <div className='body'>
            <Nav/>
            <Home/>
            <Project/>
        </div>
    );
};

export default Container;