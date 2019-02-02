import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home.js';
import Register from './Components/Register/Register.js';
import Connect from './Components/Connect/Connect.js';
import Book from './Components/Book/Book.js';
import Trips from './Components/Trips/Trips.js';
import Navigation from './Components/StructurePage/Navigation.js';
import Footer from './Components/StructurePage/Footer.js';
import Time from './Components/Time/Time.js';
import Space from './Components/Space/Space.js';
import NotFound from './Components/NotFound/NotFound.js';


class App extends Component {
  render() {
    return (
      <Router basename="/~temoins">
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/reserver" component={Book} />
            <Route path="/destinations" component={Trips} />
            <Route path="/connexion" component={Connect} />
            <Route path="/inscription" component={Register} />
            <Route path="/temps" component={Time} />
            <Route path="/espace" component={Space} />
            <Route path="/" component={NotFound} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
