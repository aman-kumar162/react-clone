import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar.js';
import Textdoc from './Components/Textdoc';
class App extends Component {
  render() {
    return (
      
        <div className="container">
          
          <Navbar titles="TextUtils" move="Home" contact="Contact for more"  />
          <div className='container my-3'><Textdoc/></div>
        </div>   
        
      
    );
  }
}

export default App;
