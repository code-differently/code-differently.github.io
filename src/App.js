import banner from './imgs/cartoon.jpg';


import './App.css';
import React from 'react';

import { HashRouter as Router, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Schedule from './components/Schedule';
import HomePage from './components/HomePage';
import Resources from './components/Resources';

function App() {

  return (
    <div className="App">
      <Router basename='/'>
        <header className="App-header">
          <img src={banner} alt="logo" className="img-fluid App-header-Img"/>
          <NavigationBar/>
        </header>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/schedule" component={Schedule}></Route>
        <Route exact path="/resources" component={Resources}></Route>
      </Router>
    </div>
  );
}

export default App;
