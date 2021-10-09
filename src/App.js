import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import ScrollButton from './components/ScrollButton';
import Navigator from './components/Navigator';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <Navigator/>
      <Router>
        <Route exact path="/"  component={Home} />
        <Route exact path="/Education" component={Education}/>
        <Route exact path="/Experience" component={Experience}/>
        <Route exact path="/Skills" component={Skills}/>
        
      </Router>  
      <Footer/>
      <ScrollButton/>
    </div>
  );
}

export default App;
