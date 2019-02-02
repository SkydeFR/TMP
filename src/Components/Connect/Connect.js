import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Connect.css';
import { Link } from 'react-router-dom';
import api from '../../utils/api.js';
import APIcodes from '../../utils/APIcodes';
import { Alert } from 'reactstrap';

class Connect extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      alertColor: 'success',
      alertMessage: 'La connexion a réussi !',
      alertOpen: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  
      const user = {
        email: this.state.email,
        password: this.state.password
      }

      if(!this.state.email) {
        this.setState({
          valide: false,
          alertColor: 'danger',
          alertMessage: 'Vous devez spécifier une adresse mail.',
          alertOpen: true,
        });
        return;
      }

      if(!this.state.password) {
        this.setState({
          valide: false,
          alertColor: 'danger',
          alertMessage: 'Vous devez spécifier un mot de passe.',
          alertOpen: true,
        });
        return;
      }

      api.login(user.email, user.password).then(({data}) => {
          this.setState({
              valide: true,
              alertColor: 'success',
              alertMessage: 'La connexion a réussi !',
              alertOpen: true,
          });
          api.saveToken(data.token);
          this.props.history.push('/');
      }).catch(
          err => {
            if(err.response && err.response.data) {
              this.setState({
                  valide: false,
                  alertOpen: true,
                  alertColor: 'danger',
                  alertMessage: APIcodes[err.response.data.code],
              })
            }
            else {
              this.setState({
                valide: false,
                alertOpen: true,
                alertColor: 'danger',
                alertMessage: err.message,
              });
            }
          }
      );
  }

  handleChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Connexion</h1>
        <h2 class="sous-titre">Accédez à votre espace personnel</h2>


        <section id="connexion" class="dark-theme">
          <Container>
            <Row>
              <Col sm="12" md="6" className="text-center m-auto">
                  <i className="material-icons bigicon">whatshot</i>
              </Col>
              <Col sm="12" md="6">
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="identifiant"><i class="material-icons">person</i> Adresse mail</Label>
                    <Input type="text" name="email" id="email" onChange={this.handleChange} />
                  </FormGroup>

                  <FormGroup>
                    <Label for="mot-de-passe"><i class="material-icons">security</i> Mot de passe</Label>
                    <Input type="password" name="password" id="password" onChange={this.handleChange} />
                  </FormGroup>

                  <Button>Connexion</Button>

                  <Alert color={this.state.alertColor} isOpen={this.state.alertOpen} toggle={this.toggleAlert}>{this.state.alertMessage}</Alert>

                </Form>
                <p>
                  Vous n'avez pas de compte ? <Link to={'/inscription'}>Créez-en un !</Link>
                  <br/>
                  <a href="#">Compte perdu.</a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Connect;
