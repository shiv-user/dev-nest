import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';

import Jobs from './Components/Jobs';
import PageNotFound from './Components/PageNotFound'
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
  <Router>
    <Switch>
    <Route exact path="/" component={Header} />
    <Route exact path="/jobs" component={Jobs} />
    <Route exact path="*" component={PageNotFound} />
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
