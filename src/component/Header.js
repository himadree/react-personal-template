import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react'
import Nav from './Nav';

import logo from './img/logo.png'
// import App from '../App';

class Header extends Component{
    render(){
        return(
            <div>
                <header id="header">
                    <Container className="main-menu">
                        <Row className="align-items-center justify-content-between d-flex">
                            <div id="logo">
                                <a href="index.html">
                                    <img src={logo} alt="" title="" />
                                </a>
                            </div>
                            <Nav />                
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}
export default Header