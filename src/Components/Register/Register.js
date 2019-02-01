import React, { Component } from 'react';
import './Register.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import * as EmailValidator from 'email-validator';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
 


class Register extends Component {

    validateForm() {
        if (EmailValidator.validate('lol') === true) {
            console.log('true');
        }
        else {
            console.log('false');
        }
        
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    
        /*
        if(this.state[event.target.id + "Valide"] === 2) {
          this.testChange(event);
        }
    
        if(event.target.id === 'password') {
          if(this.state.cpasswordValide === 1 || this.state.cpasswordValide === 2)
          {
            this.setState({cpasswordValide: 0});
          }
        }
        */
      }

    render() {
        return (

            <div>

                <h1>S'inscrire</h1>
                <h2 class="sous-titre">Sous-titre</h2>

                <div class="card">
                    <br/>

                    Nom
                    <input type="text" id="nom" />

                    Prénom
                    <input type="text" id="prenom" />

                    Adresse e-mail
                    <input type="text" id="mail" />

                    Genre
                    <FormGroup>
                        <Input type="select" name="TypeEvent" id="TypeEvent" placeholder="Evénement">
                            <option>Masculin</option>
                            <option>Feminin</option>
                            <option>Autre</option>
                        </Input>
                    </FormGroup>
                
                    Mot de passe
                    <input type="text" id="password" />
                    Confirmer le mot de passe
                    <input type="text" id="cpassword" />
                    Date de naissance
                    <input type="date" id="datenaissance" />

                    <br/>
                    <button onClick={this.validateForm}>Valider</button>
                    <br/>
                    
                </div>

            </div>

            
        );
    }
}

export default Register;
