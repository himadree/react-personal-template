import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
class Elements extends Component{
    render(){
        return(
            <div>
                <Header />
                <section class="relative about-banner" id="home">	
                    <div class="overlay overlay-bg"></div>
                    <div class="container">				
                        <div class="row d-flex align-items-center justify-content-center">
                            <div class="about-content col-lg-12">
                                <h1 class="text-white">
                                    Elements		
                                </h1>	
                                <p class="text-white link-nav"><a href="index.html">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="elements.html"> Elements</a></p>
                            </div>	
                        </div>
                    </div>
			    </section>
                <Footer />
            </div>
        );
    }
}
export default Elements