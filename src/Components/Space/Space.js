import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Space.css';

class Space extends Component {
  render() {
    return (
      <div>
        <h1>L'Espace</h1>
        <h2 class="sous-titre">Croisières sur-mesure</h2>
        <section id="espace-presentation" class="dark-theme">
          <Container>
            <Row>
              <Col>
                <h2>Le Mega Stardust 5210</h2>
                <h3>Le Système Solaire à vol d'oiseau</h3>
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

export default Space;
