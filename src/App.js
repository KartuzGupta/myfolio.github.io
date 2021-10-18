import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import ScrollButton from './components/ScrollButton';
import Navigator from './components/Navigator';
import Skills from './pages/Skills';
import Animated from './components/Animated_bg';

function App() {
  return (

    <div className="App">
      {/* <Navigation/> */}
      <Animated/>
      <Router>
      <Navigator/>
      <Switch>
        
        <Route  path="/Education" component={Education}/>
        <Route  path="/Experience" component={Experience}/>
        <Route  path="/Skills" component={Skills}/>
        <Route  exact={true} path="/" component={Home} />
      </Switch>
      </Router>
      <ScrollButton/>
     
      <Footer/>
    </div>

  );
}

export default App;
