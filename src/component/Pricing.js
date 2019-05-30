import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Pricing extends Component {
    render(){
        return(
            <div>
                <Header />
                {/** Start banner area */}
                <section class="about-banner">
                    <div class="container">				
                        <div class="row d-flex align-items-center justify-content-center">
                            <div class="about-content col-lg-12">
                                <h1 class="text-white">
                                    Pricing Plan				
                                </h1>	
                                <p class="text-white link-nav"><a href="index.html">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="price.html"> Pricing Plan</a></p>
                            </div>	
                        </div>
                    </div>
			    </section>

                <Footer />
            </div>
        )
    }
}
export default Pricing