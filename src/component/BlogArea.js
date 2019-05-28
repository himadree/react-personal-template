import React, { Component } from 'react';
import b1 from './img/b1.jpg';
import b2 from './img/b2.jpg';
import b3 from './img/b3.jpg';
import user from './img/user.png';
class BlogArea extends Component{
    render(){
        return(
            <div>
                <section class="recent-blog-area section-gap">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8 pb-30 header-text">
                                <h1>Latest posts from our blog</h1>
                                <p>
                                    You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business
                                </p>
                            </div>
                        </div>
                        <div class="row">	
                            <div class="single-recent-blog col-lg-4 col-md-4">
                                <div class="thumb">
                                    <img class="f-img img-fluid mx-auto" src={b1} alt="" />	
                                </div>
                                <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                                    <div>
                                        <img class="img-fluid" src={user} alt="" />
                                        <a href="#"><span>Mark Wiens</span></a>
                                    </div>
                                    <div class="meta">
                                        13th Dec
                                        <span class="lnr lnr-heart"></span> 15
                                        <span class="lnr lnr-bubble"></span> 04
                                    </div>
                                </div>							
                                <a href="#">
                                    <h4>Break Through Self Doubt
                                    And Fear</h4>
                                </a>
                                <p>
                                    Dream interpretation has many forms; it can be done be done for the sake of fun, hobby or can be taken up as a serious career.
                                </p>
                            </div>
                            <div class="single-recent-blog col-lg-4 col-md-4">
                                <div class="thumb">
                                    <img class="f-img img-fluid mx-auto" src={b2} alt="" />	
                                </div>
                                <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                                    <div>
                                        <img class="img-fluid" src={user} alt="" />
                                        <a href="#"><span>Mark Wiens</span></a>
                                    </div>
                                    <div class="meta">
                                        13th Dec
                                        <span class="lnr lnr-heart"></span> 15
                                        <span class="lnr lnr-bubble"></span> 04
                                    </div>
                                </div>							
                                <a href="#">
                                    <h4>Portable Fashion for
                                    young women</h4>
                                </a>
                                <p>
                                    You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving.
                                </p>
                            </div>
                            <div class="single-recent-blog col-lg-4 col-md-4">
                                <div class="thumb">
                                    <img class="f-img img-fluid mx-auto" src={b3} alt="" />	
                                </div>
                                <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                                    <div>
                                        <img class="img-fluid" src={user} alt="" />
                                        <a href="#"><span>Mark Wiens</span></a>
                                    </div>
                                    <div class="meta">
                                        13th Dec
                                        <span class="lnr lnr-heart"></span> 15
                                        <span class="lnr lnr-bubble"></span> 04
                                    </div>
                                </div>							
                                <a href="#">
                                    <h4>Do Dreams Serve As
                                    A Premonition</h4>
                                </a>
                                <p>
                                    So many of us are demotivated to achieve anything. Such people are not enthusiastic about anything. They don’t want to work involved.
                                </p>
                            </div>					
                        </div>
                    </div>	
			    </section>
            </div>
        );
    }
}
export default BlogArea