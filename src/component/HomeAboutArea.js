import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'bootstrap-4-react'
import about_img from './img/about-img.png'
class HomeAboutArea extends Component{
    render(){
        return(
            <div>
                <section class="home-about-area pt-120">
                    <Container>
                        <Row className="align-items-center justify-content-between">
                            <Col col="lg-6 md-6" className="home-about-left">
                                <img className="img-fluid" src={about_img} alt="" />
                            </Col>
                            <Col col="lg-5 md-6" className="home-about-right">
                                <h6>About Me</h6>
                                <h1 className="text-uppercase">Personal Details</h1>
                                <p>
                                    Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </p>
                                <a href="#" className="primary-btn text-uppercase">View Full Details</a>
                            </Col>
                        </Row>
                    </Container>
			    </section>
            </div>
        );
    }
}
export default HomeAboutArea