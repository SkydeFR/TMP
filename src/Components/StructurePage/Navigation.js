import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            pages: ['Accueil', 'Réserver', 'Nos destinations', 'Mentions légales']
        }
    }

    render() {
        return (
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
        )
    }

}

export default Navigation;