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
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (

    <div className="App">
      {/* <Navigation/> */}
      <Animated/>
      <Router>
        <ScrollToTop/>
      <Navigator/>
      <Switch>
        <Route exact path="/" component={Home} />
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
