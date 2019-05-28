import React, { Component } from 'react'
import Header from './Header';
import AboutBanner from './about/AboutBanner';
import Footer from './Footer';

export class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutBanner />
        <Footer />
      </div>
    )
  }
}

export default About
