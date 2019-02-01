import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>WSC Event</h1>
        <h2 class="sous-titre">Revivez l'Histoire. Vivez la vôtre.</h2>
        <section id="faucon-imperial">
          <Container>
            <Row>
              <Col>
                <h2>Le Faucon Impérial</h2>
                <h3>Au coeur de votre voyage</h3>
                <p>Le Faucon Impérial n'est pas à proprement parler une « machine » à voyager dans le temps : il s'agit donc d'une entité vivante.
                  A l'aide de notre Faucon Impérial, il vous sera possible de voyager en toute sécurité dans une infinité d'autres univers à n'importe quelle époque.
                  <br /><br />
                  Les deux seules limites étant l'impossibilité de franchir le « Voïd », ce qui l'empêche de passer dans des mondes parallèles.
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
                <p>Nous retiendrons un merveilleux voyage, une vue lumineuse, une ambiance chaleureuse, un guide disponible et plein d'humour. Nous repartons les yeux et le coeur remplis de beaux souvenirs.
                  <br />
                  <span className="text-danger">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Julie et Kévin, week-end à la Plate-Forme Spaciale "Une" ~ Les derniers instants de la Terre</span>
                </p>
                <p>De formidables liens se sont tissés avec les locaux notamment dans les petits villages entourant l'arène de Nephtis, notre fabuleux guide Hien était formidable ! Une expérience hors du commun qui marque et crée de beaux souvenirs.
                  <br />
                  <span className="text-danger">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Steven, une semaine sur le satellite SkarlinGrad D8, District "NoSurvival" ~ Combats à morts et visite des villages locaux</span>
                </p>
                <p>Voyage extraordinaire et nous pesons nos mots !!! Paysages, faune, flore et rencontres exceptionnelles. Voyage très riche à tous points de vue.
                  <br />
                  <span className="text-danger">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Lucie et Niels avec leurs enfants, 2 semaines sur la planète Moohn ~ Sortie culturelle au sein de la forêt Stelia</span>
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
