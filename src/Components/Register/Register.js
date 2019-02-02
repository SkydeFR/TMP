import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Register.css';
import * as EmailValidator from 'email-validator';
import { Link } from 'react-router-dom';



class Register extends Component {

    validateForm() {
        if (EmailValidator.validate('test@gmail.com') === true) {
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

                <h1>Inscription</h1>
                <h2 class="sous-titre">Rejoignez l'aventure WSC</h2>

                <section id="inscription">
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
                                                <Input type="text" name="prenom" id="inscription-prenom"></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="nom"><i class="material-icons">person_outline</i> Nom</Label>
                                                <Input type="text" name="nom" id="inscription-nom"></Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="mail"><i class="material-icons">alternate_email</i> Adresse mail</Label>
                                                <Input type="email" name="mail" id="inscription-mail"></Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="genre"><i class="material-icons">wc</i> Genre</Label>
                                                <Input type="select" name="genre" id="inscription-genre">
                                                    <option>Masculin</option>
                                                    <option>Féminin</option>
                                                    <option>Autre</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="date-naissance"><i class="material-icons">cake</i> Date de naissance</Label>
                                                <Input type="date" name="date-naissance" id="inscription-date-naissance"></Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="mot-de-passe"><i class="material-icons">security</i> Mot de passe</Label>
                                                <Input type="password" name="mot-de-passe" id="connexion-mot-de-passe"></Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="confirmation"><i class="material-icons">verified_user</i> Confirmation du mot de passe</Label>
                                                <Input type="password" name="confirmation" id="inscription-confirmation"></Input>
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
