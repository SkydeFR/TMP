import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="font-knewave">WSC Event</h1>
        <h2 className="sous-titre">Votre voyage commence maintenant</h2>
        <section id="voyages" className="dark-theme">
          <Container>
            <Row>
              <Col>
                <h2>Le temps et l'espace</h2>
                <h3>Sont à votre portée</h3>
                <p>
                  Bacon ipsum dolor amet leberkas pork loin shankle jerky ham hock turkey ham meatloaf t-bone tongue spare ribs hamburger corned beef ball tip. Meatloaf cupim doner corned beef t-bone pork meatball swine shoulder brisket alcatra chicken turducken tenderloin. Beef spare ribs tail kevin alcatra ball tip short ribs. Jerky strip steak pork prosciutto pork loin hamburger chuck. Shoulder ground round pork belly strip steak, pig andouille hamburger leberkas filet mignon beef kevin brisket burgdoggen. Beef ribs shoulder brisket biltong tail venison salami tenderloin doner.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='text-center'>
                <Button tag={Link} to='/temps'>Voyager dans le Temps</Button>
              </Col>
              <Col className='text-center'>
                <Button tag={Link} to='/espace'>Voyager dans l'Espace</Button>
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
                <h4 className="temoignage-nom">Alexandre Guidet</h4>
                <h5 className="temoignage-destination">Mariage, Japon Impérial</h5>
                <hr />

                <p>
                  Nous retiendrons un merveilleux voyage, une vue lumineuse, une ambiance chaleureuse, un guide disponible et plein d'humour. Nous repartons les yeux et le coeur remplis de beaux souvenirs
                </p>
              </Col>

              <Col className="temoignage">
                <h4 className="temoignage-nom">Matthieu Simonet</h4>
                <h5 className="temoignage-destination">Croisière Spatiale, Mars</h5>
                <hr />
                <p>
                  De formidables liens se sont tissés avec les locaux notamment dans les petits villages entourant l'arène de Nephtis, notre fabuleux guide Hien était formidable ! Une expérience hors du commun qui marque et crée de beaux souvenirs.
                </p>
              </Col>

              <Col className="temoignage">
                <h4 class="temoignage-nom">Christophe Nicolle</h4>
                <h5 class="temoignage-destination">Anniversaire, Neptune</h5>
                <hr />
                <p>
                  Des expériences inoubliables tant sur la découverte d’un pays et d’une culture que sur le plan humain, un voyage extraordinaire ! Paysages, faune, flore et rencontres exceptionnelles. Voyage très riche à tous points de vue.
                </p>
              </Col>
            </Row>

          </Container>
        </section>

        <section id="equipe" className="blue-theme">
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
