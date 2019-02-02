import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Time.css';

class Time extends Component {
  render() {
    return (
      <div>
        <h1>Le Temps</h1>
        <h2 class="sous-titre">Revivez l'Histoire, vivez la vôtre</h2>
        <section id="temps-presentation" class="dark-theme">
          <Container>
            <Row>
              <Col>
                <h2>Le Faucon Impérial</h2>
                <h3>À travers les époques. Littéralement.</h3>
                <p>
                  Le Faucon Impérial n'est pas à proprement parler une « machine » à voyager dans le temps : il s'agit donc d'une entité vivante.
                    A l'aide de notre Faucon Impérial, il vous sera possible de voyager en toute sécurité dans une infinité d'autres univers à n'importe quelle époque.
                  <br /><br />
                  Les deux seules limites étant l'impossibilité de franchir le « Voïd », ce qui l'empêche de passer dans des mondes parallèles.
                  Il ne peut également pas voyager à une date antérieure au début de l'univers, ni postérieure à sa fin.
                </p>
              </Col>
              <Col>

              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Time;
