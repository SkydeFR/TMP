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
                  Lorem ipsum
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
