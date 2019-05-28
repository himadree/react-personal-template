import React, { Component } from 'react';
import Nav from './Nav';

import logo from './img/logo.png'
// import App from '../App';

class Header extends Component{
    render(){
        return(
            <div>
                <header id="header">
                    <div class="container main-menu">
                        <div class="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <a href="index.html">
                                <img src={logo} alt="" title="" />
                            </a>
                        </div>
                        <Nav />
                            
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header