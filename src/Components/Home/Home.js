import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="font-knewave">WSC'Event</h1>
        <h2 className="sous-titre">Votre voyage commence maintenant</h2>
        <section id="voyages" className="dark-theme">
          <Container>
            <Row>
              <Col>
                <h2>Le temps et l'espace</h2>
                <h3>Sont à votre portée</h3>
                <p>
                  À l'aide de nos deux dernières technologies de pointe, le Faucon Imperial et le Mega Stardust 5210, deux prestations exclusives sont désormais disponibles chez WSC'Event ! Il est désormais possible de voyager en toute sécurité dans une infinité d'époques différentes à bord du Faucon Imperial ainsi que d'effectuer des voyages spatiaux tout confort à l'intérieur de notre système solaire sous la forme d'une croisière au sein du Mega Stardust 5210.
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
                <img src={require('../../media/image/temoignage-1.png')}></img>
                <h4 className="temoignage-nom">Auriane Diot</h4>
                <h5 className="temoignage-destination">Mariage, Japon Impérial</h5>
                <hr />

                <p>
                  Nous retiendrons un merveilleux voyage, une vue lumineuse, une ambiance chaleureuse, un guide disponible et plein d'humour. Nous repartons les yeux et le coeur remplis de beaux souvenirs
                </p>
              </Col>

              <Col className="temoignage">
                <img src={require('../../media/image/temoignage-2.png')}></img>
                <h4 className="temoignage-nom">Bruce Stark</h4>
                <h5 className="temoignage-destination">Croisière « Jovian »</h5>
                <hr />
                <p>
                  De formidables liens se sont tissés avec les locaux notamment dans les petits villages entourant l'arène de Nephtis, notre fabuleux guide Hien était formidable ! Une expérience hors du commun qui marque et crée de beaux souvenirs.
                </p>
              </Col>

              <Col className="temoignage">
                <img src={require('../../media/image/temoignage-3.png')}></img>
                <h4 className="temoignage-nom">Leslie Delphoi</h4>
                <h5 className="temoignage-destination">Aniversaire, Grèce Antique</h5>
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
                <img src={require('../../media/image/team.png')}></img>
              </Col>
              <Col>
                <h2>La WSC Team</h2>
                <h3>Une dévotion sans limite</h3>
                <p>
                  La WSC Team est composée des plus fervants Témoins de JavaScript. Elle est à ce jour constituée des ingénieurs <b>Y. Buatois</b>, <b>K. Kibongui</b>, <b>A. Pagel</b> et <b>J. Pinto Da Fonseca</b>.
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
