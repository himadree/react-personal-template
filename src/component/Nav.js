import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Nav extends Component{
    render(){
        return(
            <div>
                <nav id="nav-menu-container">
                    <ul class="nav-menu">
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/elements">Elenents</NavLink>
                    </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Nav