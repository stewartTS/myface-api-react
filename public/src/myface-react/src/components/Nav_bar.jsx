import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav class='navStyle'>
            <h1 id="main-header"> MyFace </h1>
            <div class="navLinkContainer">
                <Link to="#" class="navLinks">Home</Link>
                <Link to="/posts" class="navLinks">Posts</Link>
                <Link to="/users" class="navLinks">Users</Link>
            </div>
        </nav>


    )
}

export { NavBar }