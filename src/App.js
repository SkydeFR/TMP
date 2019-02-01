import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home.js';
import Register from './Components/Register/Register.js';
import Connect from './Components/Connect/Connect.js';
import Book from './Components/Book/Book.js';
import Trips from './Components/Trips/Trips.js';
import LegalNotice from './Components/LegalNotice/LegalNotice.js';
import Navigation from './Components/StructurePage/Navigation.js';
import Footer from './Components/StructurePage/Footer.js';


class App extends Component {
  render() {
    return (
      <Router basename="/~temoins">
        <div>
          <Navigation />

          <Route exact path="/" component={Home} />
          <Route path="/inscription" component={Register} />
          <Route path="/connexion" component={Connect} />
          <Route path="/reserver" component={Book} />
          <Route path="/destinations" component={Trips} />
          <Route path="/mentions-legales" component={LegalNotice} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
