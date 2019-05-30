import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio';
import Pricing from './component/Pricing'
import Blog from './component/Blog';
import Elements from './component/Elements';

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
            
            <Route path='/' exact component={HomePage} />
            <Route path='/about' exact component={About} />
            <Route path='/services' component={Service} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/blog' component={Blog} />
            <Route path='/elements' component={Elements} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;