import React, { Component } from 'react';
import './Connect.css';

class Connect extends Component {
  render() {
    return (

        <div>

        <h1>Se connecter</h1>
        <h2 class="sous-titre">Sous-titre</h2>

        <div class="card">
            Adresse e-mail
            <br/>
            <input type="text" />
            <br/>

            Mot de passe
            <br/>
            <input type="text" />

            <br/>
            <button>Valider</button>
            <br/>
            
        </div>

        </div>
    );
  }
}

export default Connect;
