import React from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Switch>
        <Route exact path = "/about" component = {withRouter(About)} />
        <Route exact path = "/projects" component = {withRouter(Projects)} />
        <Route exact path = "/contact" component = {withRouter(Contact)} />
        <Route exact path = "/" component = {withRouter(About)} />
        </Switch>
    
    </div>
    </Router>
  );
}

export default App;
