import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
class Blog extends Component{
    render(){
        return(
            <div>
                <Header />
                <section class="banner-area relative blog-home-banner" id="home">	
                    <div class="overlay overlay-bg"></div>
                    <div class="container">				
                        <div class="row d-flex align-items-center justify-content-center">
                            <div class="about-content blog-header-content col-lg-12">
                                <h1 class="text-white">
                                    Dude You’re Getting
                                    a Telescope				
                                </h1>	
                                <p class="text-white">
                                    There is a moment in the life of any aspiring astronomer that it is time to buy that first
                                </p>
                                <a href="blog-single.html" class="primary-btn">View More</a>
                            </div>	
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
export default Blog