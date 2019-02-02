import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Connect.css';
import { Link } from 'react-router-dom';

class Connect extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Connexion</h1>
        <h2 class="sous-titre">Accédez à votre espace personnel</h2>


        <section id="connexion" class="dark-theme">
          <Container>
            <Row>
              <Col sm="12" md="6">

              </Col>
              <Col sm="12" md="6">
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="identifiant"><i class="material-icons">person</i> Identifiant</Label>
                    <Input type="text" name="identifiant" id="connexion-identifiant" />
                  </FormGroup>

                  <FormGroup>
                    <Label for="mot-de-passe"><i class="material-icons">security</i> Mot de passe</Label>
                    <Input type="password" name="mot-de-passe" id="connexion-mot-de-passe" />
                  </FormGroup>

                  <Button>Connexion</Button>
                </Form>
                <p>Vous n'avez pas de compte ? <Link to={'/inscription'}>Créez-en un !</Link></p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Connect;
