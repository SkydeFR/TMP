import React, { Component } from 'react';
import './Register.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


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

class GenderDropdown extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {
        return(
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                Button
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Masculin</DropdownItem>
                    <DropdownItem>Féminin</DropdownItem>
                    <DropdownItem>Autre</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }

}

export default Register;
