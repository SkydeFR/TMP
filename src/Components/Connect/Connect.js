import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Connect.css';

class Connect extends Component {
  render() {
    return (
        <div>
          <h1>Connexion</h1>
          <h2 class="sous-titre">Accédez à votre espace personnel</h2>


          <section id="connexion">
            <Container>
              <Row>
                <Col>

                </Col>
                <Col>
                  <Form>
                    <FormGroup>
                      <Label for="identifiant"><i class="material-icons">person</i> Identifiant</Label>
                      <Input type="text" name="identifiant" id="connexion-identifiant"></Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="mot-de-passe"><i class="material-icons">security</i> Mot de passe</Label>
                      <Input type="password" name="mot-de-passe" id="connexion-mot-de-passe"></Input>
                    </FormGroup>

                    <Button>Connexion</Button>
                  </Form>
                  <p>Vous n'avez pas de compte ? <a href="#">Créez-en un !</a></p>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
    );
  }
}

export default Connect;
