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
              </Col>
            </Row>
            <Row>
              <Col className="temoignage">
                <h4 class="temoignage-nom">Alexandre Guidet</h4>
                <h5 class="temoignage-destination">Mariage, Japon Impérial</h5>
                <hr/>

                <p>
                  De formidables liens se sont tissés avec les locaux notamment dans les petits villages entourant l'arène de Nephtis, notre fabuleux guide Hien était formidable ! Une expérience hors du commun qui marque et crée de beaux souvenirs.
                </p>
              </Col>

              <Col className="temoignage">
                <h4 class="temoignage-nom">Matthieu Simonet</h4>
                <h5 class="temoignage-destination">Croisière Spatiale, Mars</h5>
                <hr/>
                <p>
                  De formidables liens se sont tissés avec les locaux notamment dans les petits villages entourant l'arène de Nephtis, notre fabuleux guide Hien était formidable ! Une expérience hors du commun qui marque et crée de beaux souvenirs.
                </p>
              </Col>
              
              <Col className="temoignage">
                <h4 class="temoignage-nom">Cristophe Nicolle</h4>
                <h5 class="temoignage-destination">Anniversaire, Neptune</h5>
                <hr/>
                <p>
                  De formidables liens se sont tissés avec les locaux notamment dans les petits villages entourant l'arène de Nephtis, notre fabuleux guide Hien était formidable ! Une expérience hors du commun qui marque et crée de beaux souvenirs.
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
