import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom";
import Sports from './Sports.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      comments: null
    }
  }


  render() {
    return (
      <div className="App">     
          <h1 className="App-title">Sports Comments</h1>
      
    
        < Sports/>
        
      </div>
      
        
    
    );
  }
}

export default App;
