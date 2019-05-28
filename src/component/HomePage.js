import React, { Component } from 'react';

//import './component/css/linearicons.css';
import './css/font-awesome.min.css';
import './css/bootstrap.css';
import './css/magnific-popup.css';
//import './component/css/jquery-ui.css';
import './css/nice-select.css';
import './css/animate.min.css';
import './css/owl.carousel.css';
import './css/main.css';

import Header from './Header';
import Banner from './Banner';
import HomeAboutArea from './HomeAboutArea';
import ServicesArea from './ServicesArea';
import FactsArea from './FactsArea';
import PriceArea from './PriceArea';
import BlogArea from './BlogArea';
import Footer from './Footer';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <HomeAboutArea />
        <ServicesArea />
        <FactsArea />
        <PriceArea />
        <BlogArea />
        <Footer />
      </div>
    )
  }
}

export default HomePage
