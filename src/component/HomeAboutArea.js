import React, { Component } from 'react';
import about_img from './img/about-img.png'
class HomeAboutArea extends Component{
    render(){
        return(
            <div>
                <section class="home-about-area pt-120">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-lg-6 col-md-6 home-about-left">
                                <img class="img-fluid" src={about_img} alt="" />
                            </div>
                            <div class="col-lg-5 col-md-6 home-about-right">
                                <h6>About Me</h6>
                                <h1 class="text-uppercase">Personal Details</h1>
                                <p>
                                    Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </p>
                                <a href="#" class="primary-btn text-uppercase">View Full Details</a>
                            </div>
                        </div>
                    </div>
			    </section>
            </div>
        );
    }
}
export default HomeAboutArea