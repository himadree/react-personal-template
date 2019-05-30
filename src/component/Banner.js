import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react'
import hero_img from './img/hero-img.png'
class Banner extends Component{
    render(){
        return(
            <div>
                <section className="banner-area">
                    <Container>
                        <Row className="fullscreen align-items-center justify-content-between">
                            <Col col="lg-6 md-6" className="banner-left">
                                <h6>This is me</h6>
                                <h1>Philip Gilbert</h1>
                                <p>
                                    You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.
                                </p>
                                <a href="#" className="primary-btn text-uppercase">discover now</a>
                            </Col>
                            <Col col="lg-6 md-6" className="banner-right d-flex align-self-end">
                                <img className="img-fluid" src={hero_img} alt="" />
                            </Col>
                        </Row>
                    </Container>					
			    </section>
            </div>
        );
    }
}
export default Banner