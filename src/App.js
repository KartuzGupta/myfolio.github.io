import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Education from './components/Education';
import Experience from './components/Experience';
import ScrollButton from './components/ScrollButton';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Education" component={Education}/>
        <Route exact path="/Experience" component={Experience}/>
      </Router>  
      <Footer/>
      <ScrollButton/>
    </div>
  );
}

export default App;
