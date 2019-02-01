import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Home from './Components/Home/Home.js';
import Book from './Components/Book/Book.js';
import Trips from './Components/Trips/Trips.js';
import LegalNotice from './Components/LegalNotice/LegalNotice.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Accueil</Link> {/* Présentation de la machine + témoignages d'anciens clients + l'équipe + entreprise ? */}
            </li>
            <li>
              <Link to="/reserver">Réserver</Link> {/* Réservation avec formulaire */}
            </li>
            <li>
              <Link to="/destinations">Nos destinations</Link> {/* Voyages et prestations possibles */}
            </li>
            <li>
              <Link to="/mentions-legales">Mentions légales</Link> {/* Mentions légales */}
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/reserver" component={Book} />
          <Route path="/destinations" component={Trips} />
          <Route path="/mentions-legales" component={LegalNotice} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
