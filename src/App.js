import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import ScrollButton from './components/ScrollButton';
import Navigator from './components/Navigator';
import Skills from './components/Skills';
import Animated from './components/Animated_bg';
function App() {
  return (

    <div className="App">
      {/* <Navigation/> */}
      <Animated/>
      <Router>
      <Navigator/>
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/Education" component={Education}/>
        <Route exact path="/Experience" component={Experience}/>
        <Route exact path="/Skills" component={Skills}/>
      </Switch>
      </Router>
      <ScrollButton/>
      <Footer/>
    </div>

  );
}

export default App;
