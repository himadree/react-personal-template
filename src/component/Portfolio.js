import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import p1 from './img/p1.jpg'
import p2 from './img/p2.jpg'
import p3 from './img/p3.jpg'
import p4 from './img/p4.jpg'
import p5 from './img/p5.jpg'
import p6 from './img/p6.jpg'
import preview from './img/preview.png'

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header />
        {/** Start banner area */}
        <section class="about-banner">
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								Portfolio				
							</h1>	
							<p class="text-white link-nav"><a href="index.html">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="portfolio.html"> Portfolio</a></p>
						</div>	
					</div>
				</div>
			</section>
      {/** End banner area */}

      {/** Start portfolio area */}
      <section class="portfolio-area section-gap" id="portfolio">
                <div class="container">
		            <div class="row d-flex justify-content-center">
		                <div class="menu-content pb-70 col-lg-8">
		                    <div class="title text-center">
		                        <h1 class="mb-10">Our Latest Featured Projects</h1>
		                        <p>Who are in extremely love with eco friendly system.</p>
		                    </div>
		                </div>
		            </div>
                    
                    <div class="filters">
                        <ul>
                            <li class="active" data-filter="*">All</li>
                            <li data-filter=".vector">Vector</li>
                            <li data-filter=".raster">Raster</li>
                            <li data-filter=".ui">UI/UX</li>
                            <li data-filter=".printing">Printing</li>
                        </ul>
                    </div>
                    
                    <div class="filters-content">
                        <div class="row grid">
                            <div class="single-portfolio col-sm-4 all vector">
                            	<div class="relative">
	                            	<div class="thumb">
	                            		<div class="overlay overlay-bg"></div>
	                            		 <img class="image img-fluid" src={p1} alt="" />
	                            	</div>
									<a href="img/p1.jpg" class="img-pop-up">	
									  <div class="middle">
									    <div class="text align-self-center d-flex"><img src={preview} alt="" /></div>
									  </div>
								</a>                              		
                            	</div>
								<div class="p-inner">
								    <h4>2D Vinyl Design</h4>
									<div class="cat">vector</div>
								</div>					                               
                            </div>
                            <div class="single-portfolio col-sm-4 all raster">
                            	<div class="relative">
	                            	<div class="thumb">
	                            		<div class="overlay overlay-bg"></div>
	                            		 <img class="image img-fluid" src={p2} alt="" />
	                            	</div>
									<a href="img/p2.jpg" class="img-pop-up">	
									  <div class="middle">
									    <div class="text align-self-center d-flex"><img src={preview} alt="" /></div>
									  </div>
								</a>                              		
                            	</div>
								<div class="p-inner">
								    <h4>2D Vinyl Design</h4>
									<div class="cat">vector</div>
								</div>					                               
                            </div>                            
                            <div class="single-portfolio col-sm-4 all ui">
                            	<div class="relative">
	                            	<div class="thumb">
	                            		<div class="overlay overlay-bg"></div>
	                            		 <img class="image img-fluid" src={p3} alt="" />
	                            	</div>
									<a href="img/p3.jpg" class="img-pop-up">	
									  <div class="middle">
									    <div class="text align-self-center d-flex"><img src={preview} alt="" /></div>
									  </div>
									</a> 
	                            		
	                           	</div>
                                <div class="p-inner">
                                    <h4>Creative Poster Design</h4>
                                    <div class="cat">Agency</div>
                                </div>
                            </div>
                            <div class="single-portfolio col-sm-4 all printing">
                            	<div class="relative">
	                            	<div class="thumb">
	                            		<div class="overlay overlay-bg"></div>
	                            		 <img class="image img-fluid" src={p4} alt="" />
	                            	</div>
									<a href="img/p4.jpg" class="img-pop-up">	
									  <div class="middle">
									    <div class="text align-self-center d-flex"><img src={preview} alt="" /></div>
									  </div>
									</a>                            		
                            	</div> 
                                <div class="p-inner">
                                    <h4>Embosed Logo Design</h4>
                                    <div class="cat">Portal</div>
                                </div>
                            </div>
                            <div class="single-portfolio col-sm-4 all vector">
                            	<div class="relative">
                            	<div class="thumb">
	                            		<div class="overlay overlay-bg"></div>
	                            		 <img class="image img-fluid" src={p5} alt="" />
	                            	</div>
									<a href="img/p5.jpg" class="img-pop-up">	
									  <div class="middle">
									    <div class="text align-self-center d-flex"><img src={preview} alt="" /></div>
									  </div>
									</a>                             		
                            	</div>
                                <div class="p-inner">
                                    <h4>3D Helmet Design</h4>
                                    <div class="cat">vector</div>
                                </div>
                            </div>
                            <div class="single-portfolio col-sm-4 all raster">
                            	<div class="relative">
	                            	<div class="thumb">
	                            		<div class="overlay overlay-bg"></div>
	                            		 <img class="image img-fluid" src={p6} alt="" />
	                            	</div>
									<a href="img/p6.jpg" class="img-pop-up">	
									  <div class="middle">
									    <div class="text align-self-center d-flex"><img src={preview} alt="" /></div>
									  </div>
									</a>                             		
                            	</div>
                                <div class="p-inner">
                                    <h4>2D Vinyl Design</h4>
                                    <div class="cat">raster</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

        <Footer/>
      </div>
    )
  }
}

export default Portfolio
