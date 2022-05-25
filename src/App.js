import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Education from './pages/Education.jsx';
import Experience from './pages/Experience.jsx';
import ScrollButton from './components/ScrollButton';
import Navigator from './components/Navigator';
import Skills from './pages/Skills.jsx';
import Animated from './components/Animated_bg';
import ScrollToTop from './components/ScrollToTop';
import ContactMe from './pages/ContactMe'
//import React, { Component } from 'react'
//import Test from './pages/test'

function App() {
  return (

    <div className="App">
      <Animated/>
      <Router>
        <ScrollToTop/>
        <Navigator/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Education" component={Education}/>
          <Route exact path="/Experience" component={Experience}/>
          <Route exact path="/Skills" component={Skills}/>
          <Route exact path="/ContactMe" component={ContactMe} /> 
        </Switch>
      </Router>
      <ScrollButton/>
     
      <Footer/>
    </div>

  );
}

export default App;
