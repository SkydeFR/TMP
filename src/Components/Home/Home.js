import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Accueil</h1>
        <section id="faucon-imperial">
          <Container>
            <Row>
              <Col>
                <h2>Le Faucon Impérial</h2>
                <h3>Au coeur de votre voyage</h3>
                <p>Le Faucon Impérial n'est pas à proprement parler une « machine » à voyager dans le temps : il contient une grande quantité de composants mécaniques et électroniques, mais une partie est vivante.<br />
                  Il s'agit donc d'une entité nécessitant le plus grand soin, dont nos spécialistes font part.<br />
                  A l'aide de notre Faucon Impérial, il vous sera possible de voyager en toute sécurité dans les autres univers à n'importe une finité d'époques.<br />
                  Les deux seules limites étant l'impossibilité de franchir le « Voïd », ce qui l'empêche de passer dans des mondes parallèles.<br />
                  Il ne peut également pas voyager à une date antérieure au début de l'univers, ni postérieure à sa fin.</p>
              </Col>
              <Col>
                Image trop cool
              </Col>
            </Row>

          </Container>
        </section>

        <section id="temoignages">
          <Container>
            <Row>
              <Col>
                <h2>Les témoignages</h2>
                <h3>Une satisfaction qui nous tient à coeur</h3>
                <p>
                  Bacon ipsum dolor amet leberkas pork loin shankle jerky ham hock turkey ham meatloaf t-bone tongue spare ribs hamburger corned beef ball tip. Meatloaf cupim doner corned beef t-bone pork meatball swine shoulder brisket alcatra chicken turducken tenderloin. Beef spare ribs tail kevin alcatra ball tip short ribs. Jerky strip steak pork prosciutto pork loin hamburger chuck. Shoulder ground round pork belly strip steak, pig andouille hamburger leberkas filet mignon beef kevin brisket burgdoggen. Beef ribs shoulder brisket biltong tail venison salami tenderloin doner.
                </p>
              </Col>
            </Row>

          </Container>
        </section>

        <section id="equipe">
          <Container>
            <Row>
              <Col>
                Image trop cool
              </Col>
              <Col>
                <h2>L'Équipe WSC Event</h2>
                <h3>Une dévotion sans limite</h3>
                <p>
                  Bacon ipsum dolor amet leberkas pork loin shankle jerky ham hock turkey ham meatloaf t-bone tongue spare ribs hamburger corned beef ball tip. Meatloaf cupim doner corned beef t-bone pork meatball swine shoulder brisket alcatra chicken turducken tenderloin. Beef spare ribs tail kevin alcatra ball tip short ribs. Jerky strip steak pork prosciutto pork loin hamburger chuck. Shoulder ground round pork belly strip steak, pig andouille hamburger leberkas filet mignon beef kevin brisket burgdoggen. Beef ribs shoulder brisket biltong tail venison salami tenderloin doner.
                </p>
              </Col>
            </Row>

          </Container>
        </section>
      </div>
    );
  }
}

export default Home;
