// import React, { Component, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';

import Navbar from './Components/Navbar.js';
import Textdoc from './Components/Textdoc';

import React, { useState } from 'react'

function App() {
    const  [mode,setMode]=useState('light');
    const [alert,setalert]=useState(null);
    const showalert=(message, type)=>{
      setalert({
        msg:message,
        typ:type

      })
      setTimeout(()=>{
           setalert(null);
      },1500);
    }
    const togglemode=()=>{
      if(mode === 'light'){
        setMode("dark");
        showalert("dark mode has been enable","success");
      }
      else setMode("light");
      showalert("light mode has been enable","success");
    }
    return (
      
        <div className="container" >
          
          <Navbar showalert ={showalert}title="TextUtils" move="Home" contact="Contact for more"  mode={mode} togglemode={togglemode}/>
          <Alert alert={alert}/>
          <div className='container my-3'><Textdoc/></div>
        </div>   
        
      
    );
  
}

export default App;
