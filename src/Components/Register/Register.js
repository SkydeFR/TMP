import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Register.css';
import * as EmailValidator from 'email-validator';
import { Link } from 'react-router-dom';
import api from '../../utils/api.js';


class Register extends Component {

    constructor(props) {
        super(props);

        // Initialisation de tous les différents champs
        this.state = {
            inscription_prenom: '',
            inscription_nom: '',
            inscription_mail: '',
            inscription_genre: 'Masculin',
            inscription_date_naissance: '',
            inscription_numero_telephone: '',
            inscription_mot_de_passe: '',
            inscription_confirmation: ''
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
  
    }

    validateForm() {

        // erreurs possibles, affichées par des consoles.log() suivis de return; changer par un affichage IHM par la suite
        if (this.state.inscription_prenom === '') {
            console.log('Prénom vide.');
            return;
        }
        if (this.state.inscription_nom === '') {
            console.log('Nom vide.');
            return;
        } 
        if (this.state.inscription_mail === '') {
            console.log('Mail vide.');
            return;
        }
        if (!EmailValidator.validate(this.state.inscription_mail)) {
            console.log('Mail invalide.');
            return;
        }
        if (this.state.inscription_date_naissance === '') {
            console.log('Date de naissance invalide.');
            return;
        }
        if (this.state.inscription_numero_telephone === '') {
            console.log('Numéro de téléphone invalide.');
            return;
        }
        if (this.state.inscription_mot_de_passe === '') {
            console.log('Mot de passe vide.');
            return;
        }
        if (this.state.inscription_confirmation === '') {
            console.log('Confirmation du mot de passe vide.');
            return;
        }
        if (this.state.inscription_mot_de_passe !== this.state.inscription_confirmation) {
            console.log('Les deux mots de passe ne sont pas identiques.');
            return;
        }

        // Everything is valid, make the API request

        let user = {
            prenom: this.state.inscription_prenom,
            nom: this.state.inscription_nom,
            email: this.state.inscription_mail,
            password: this.state.inscription_mot_de_passe,
            phone: this.state.inscription_numero_telephone
        }

        api.signup(user).then(
            console.log('xD !!!!!!!!')
        ).catch(
            err => {
                console.log(err.response.data);
                console.error(err)
            }
        );

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

                <h1>Inscription</h1>
                <h2 class="sous-titre">Rejoignez l'aventure WSC</h2>

                <section id="inscription" class="dark-theme">
                    <Container>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                <Form>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="prenom"><i class="material-icons">person</i> Prénom</Label>
                                                <Input type="text" name="prenom" id="inscription_prenom" onChange={this.handleChange}></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="nom"><i class="material-icons">person_outline</i> Nom</Label>
                                                <Input type="text" name="nom" id="inscription_nom" onChange={this.handleChange}></Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="mail"><i class="material-icons">alternate_email</i> Adresse mail</Label>
                                                <Input type="email" name="mail" id="inscription_mail" onChange={this.handleChange}></Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="genre"><i class="material-icons">wc</i> Genre</Label>
                                                <Input type="select" name="genre" id="inscription_genre" onChange={this.handleChange}>
                                                    <option>Masculin</option>
                                                    <option>Féminin</option>
                                                    <option>Autre</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="date-naissance"><i class="material-icons">cake</i> Date de naissance</Label>
                                                <Input type="date" name="date_naissance" id="inscription_date_naissance" onChange={this.handleChange}></Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="numero_telephone"><i class="material-icons">security</i> Numéro de téléphone</Label>
                                                <Input type="text" name="numero_telephone" id="inscription_numero_telephone" onChange={this.handleChange}></Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="mot-de-passe"><i class="material-icons">security</i> Mot de passe</Label>
                                                <Input type="password" name="mot_de_passe" id="inscription_mot_de_passe" onChange={this.handleChange}></Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="confirmation"><i class="material-icons">verified_user</i> Confirmation du mot de passe</Label>
                                                <Input type="password" name="confirmation" id="inscription_confirmation" onChange={this.handleChange}></Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Button onClick={this.validateForm}>Inscription</Button>
                                </Form>
                                <p>Vous avez déjà un compte ? <Link to={'/connexion'}>Connectez-vous !</Link></p>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>

        );
    }
}

export default Register;
