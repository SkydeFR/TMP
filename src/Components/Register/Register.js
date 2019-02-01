import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  render() {
    return (

        <div>

            <h1>S'inscrire</h1>
            <h2 class="sous-titre">Sous-titre</h2>

            <div class="card">
                <br/>
                Nom
                <input type="text" />

                Prénom
                <input type="text" />

                Adresse e-mail
                <input type="text" />
               
                Mot de passe
                <input type="text" />
                Confirmer le mot de passe
                <input type="text" />
                Date de naissance
                <input type="text" />

                <br/>
                <button>Valider</button>
                <br/>
                
            </div>

      </div>

        
    );
  }
}

export default Register;
