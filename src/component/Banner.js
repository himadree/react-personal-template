import React, { Component } from 'react';
import hero_img from './img/hero-img.png'
class Banner extends Component{
    render(){
        return(
            <div>
                <section className="banner-area">
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-between">
                            <div className="col-lg-6 col-md-6 banner-left">
                                <h6>This is me</h6>
                                <h1>Philip Gilbert</h1>
                                <p>
                                    You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.
                                </p>
                                <a href="#" className="primary-btn text-uppercase">discover now</a>
                            </div>
                            <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
                                <img className="img-fluid" src={hero_img} alt="" />
                            </div>
                        </div>
                    </div>					
			    </section>
            </div>
        );
    }
}
export default Banner