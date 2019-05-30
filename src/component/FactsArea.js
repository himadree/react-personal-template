import React, { Component } from 'react'
import { Container, Row, Col } from 'bootstrap-4-react'
class FactsArea extends Component{
    render(){
        return(
            <div>
                <section className="facts-area section-gap" id="facts-area">
                    <Container>				
                        <Row>
                            <Col col="lg-3 md-6" className="single-fact">
                                <h1 className="counter">2536</h1>
                                <p>Projects Completed</p>
                            </Col>
                            <Col col="lg-3 md-6" className="single-fact">
                                <h1 className="counter">6784</h1>
                                <p>Happy Clients</p>
                            </Col>
                            <Col col="lg-3 md-6" className="single-fact">
                                <h1 className="counter">2239</h1>
                                <p>Cups of Coffee</p>
                            </Col>	
                            <Col col="lg-3 md-6" className="single-fact">
                                <h1 className="counter">435</h1>
                                <p>Real Professionals</p>
                            </Col>												
                        </Row>
                    </Container>	
			    </section>
            </div>
        );
    }
}
export default FactsArea