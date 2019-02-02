import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Register.css';
import * as EmailValidator from 'email-validator';
import { Link } from 'react-router-dom';
import api from '../../utils/api.js';
import { Alert } from 'reactstrap';
import APIcodes from '../../utils/APIcodes';


class Register extends Component {

    constructor(props) {
        super(props);

        // Initialisation de tous les différents champs
        this.state = {
            valide: false,
            inscription_prenom: '',
            inscription_nom: '',
            inscription_mail: '',
            inscription_genre: 'Masculin',
            inscription_date_naissance: '',
            inscription_numero_telephone: '',
            inscription_mot_de_passe: '',
            inscription_confirmation: '',
            alertOpen: false,
            alertMessage: '',
            alertColor: 'success'
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleAlert = this.toggleAlert.bind(this);

    }

    validateForm() {

        this.setState({
            valide: false,
            alertOpen: true,
            alertColor: "danger"
        })

        // erreurs possibles, affichées par des consoles.log() suivis de return; changer par un affichage IHM par la suite
        if (this.state.inscription_prenom === '') {
            this.setState({
                alertMessage: 'Prénom vide.'
            })
            return;
        }
        if (this.state.inscription_nom === '') {
            this.setState({
                alertMessage: 'Nom vide.'
            })
            return;
        }
        if (this.state.inscription_mail === '') {
            this.setState({
                alertMessage: 'Mail vide.'
            })
            return;
        }
        if (!EmailValidator.validate(this.state.inscription_mail)) {
            this.setState({
                alertMessage: 'Mail invalide.'
            })
            return;
        }
        if (this.state.inscription_date_naissance === '') {
            this.setState({
                alertMessage: 'Date de naissance invalide.'
            })
            return;
        }
        if (this.state.inscription_numero_telephone === '') {
            this.setState({
                alertMessage: 'Numéro de téléphone invalide.'
            })
            return;
        }
        if (this.state.inscription_mot_de_passe === '') {
            this.setState({
                alertMessage: 'Mot de passe vide.'
            })
            return;
        }
        if (this.state.inscription_confirmation === '') {
            this.setState({
                alertMessage: 'Confirmation du mot de passe vide.'
            })
            return;
        }
        if (this.state.inscription_mot_de_passe !== this.state.inscription_confirmation) {
            this.setState({
                alertMessage: 'Les deux mots de passe ne sont pas identiques.'
            })
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

        api.signup(user).then(({ data }) => {
            this.setState({
                valide: true,
                alertColor: 'success',
                alertMessage: 'L\'inscription a réussi !',
                alertOpen: true,
            });
            api.saveToken(data.token);
            this.props.history.push('/');
        }).catch(
            err => {
                if (!err.response || !err.response.data || !err.response.data.code) {
                    this.setState({
                        valide: false,
                        alertOpen: true,
                        alertColor: 'danger',
                        alertMessage: err.message,
                    });
                }
                else {
                    this.setState({
                        valide: false,
                        alertOpen: true,
                        alertColor: 'danger',
                        alertMessage: APIcodes[err.response.data.code],
                    });
                }
            }
        );

    }

    toggleAlert() {
        this.setState({ alertOpen: false });
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }



    render() {
        return (

            <div>

                <h1>Inscription</h1>
                <h2 class="sous-titre">Rejoignez l'aventure WSC</h2>

                <section id="inscription" class="dark-theme">
                    <Container>
                        <Row>
                            <Col sm="12" md="6" className="text-center m-auto">
                                <i className="material-icons bigicon">sms</i>
                                <p className="w-75 m-auto">En vous inscrivant, vous confirmez avoir lu, compris et accepté les <a href="javascript:void(0);">Conditions d'utilisation</a> et la <a href="javascript:void(0);">Politique de confidentialité</a> ainsi qu'être informé(e) de votre droit à l'information.</p>
                            </Col>
                            <Col sm="12" md="6">
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

                                    <Alert color={this.state.alertColor} isOpen={this.state.alertOpen} toggle={this.toggleAlert}>{this.state.alertMessage}</Alert>

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

// class AlertComp extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             visible: true,
//             color: this.props.color,
//             text: this.props.text
//         }
//     }

//     render() {
//         let res = <div></div>;

//         if (this.state.visible) {
//             res = (
//             <Alert color={this.state.color}>
//                 {this.state.text}
//             </Alert>
//             );
//         }

//         return res;


//     }

// }

export default Register;
