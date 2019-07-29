import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    );
};

const linkStyle = {
    background: 'darkgrey',
    color: 'black',
    textDecoration: 'none'
}

const headerStyle = {
    background: 'darkgrey',
    color: 'black',
    textAlign: 'center',
    padding: '10px'
}

export default Header;