import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Button, Input, } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { withRouter } from 'react-router';


const items = [
  {
    src: require('../../media/image/espace/carousel/monde-lune.png'),
    altText: 'Tour du Monde & Lune',
    caption: 'Tour du Monde & Lune'
  },
  {
    src: require('../../media/image/espace/carousel/venus-mercure.png'),
    altText: 'Terre, Lune, Vénus & Mercure',
    caption: 'Terre, Lune, Vénus & Mercure'
  },
  {
    src: require('../../media/image/espace/carousel/systeme-solaire.png'),
    altText: 'Système Solaire',
    caption: 'Système Solaire'
  }

];

class Space extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

    this.validateForm = this.validateForm.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  validateForm() {
    // erreurs possibles, affichées par des consoles.log() suivis de return; changer par un affichage IHM par la suite
    if (localStorage.getItem('token') == null) {
      alert("Vous devez être connecter pour réserver !");
      this.props.history.push('/connexion');
    }

  }


  render() {

    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });

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
                  Le Mega Stardut 5210 est notre tout dernier projet en date à succès ! Imposant, le MS5210 mesures 375 mètres de long avec une hauteur de 275 mètres pour 10 étages. Celui-ci peut accueilir jusqu'à 150 passagers et 50 employés SWC'Event.
                  <br /><br />
                  Grâce à ce vaisseau il est possible d'effectuer des voyages spatiaux tout confort à l'intérieur de notre système solaire sous la forme d'une croisière.
                </p>
              </Col>
              <Col>

              </Col>
            </Row>
          </Container>
        </section>

        <section id="espace-croisieres">
          <Container>
            <Row>
              <Col>
                <h2>Des croisières d'exception</h2>
                <h3>Jusqu'aux confins du Système Solaire</h3>
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="espace-details">
          <Container>
            <Row className="dark-theme">
              <Col>
                <h2>Croisière « <span>Orbital</span> »</h2>
                <h3>Terre & Lune</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, enim a vestibulum facilisis, orci ante laoreet augue, et pulvinar tortor orci at dui.
                  </p>                </Col>
              <Col className="text-center m-auto">
                <h5 class="duree">3 jours</h5>
                <h5 class="prix">$75,000.00</h5>
              </Col>
            </Row>
            <Row className="dark-theme">
              <Col>
                <h2>Croisière « <span>Sunlight</span> »</h2>
                <h3>Terre, Lune, Vénus & Mercure</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, enim a vestibulum facilisis, orci ante laoreet augue, et pulvinar tortor orci at dui.
                  </p>
              </Col>
              <Col className="text-center m-auto">
                <h5 class="duree">10 jours</h5>
                <h5 class="prix">$180,000.00</h5>
              </Col>
            </Row>
            <Row className="dark-theme">
              <Col>
                <h2>Croisière « <span>Jovian</span> »</h2>
                <h3>Système Solaire</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, enim a vestibulum facilisis, orci ante laoreet augue, et pulvinar tortor orci at dui.
                  </p>                </Col>
              <Col className="text-center m-auto">
                <h5 class="duree">38 jours</h5>
                <h5 class="prix">$360,000.00</h5>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="espace-reservation" class="blue-theme">
          <Container>
            <Row>
              <Col>
                <h2>Réservations</h2>
                <h3>Croisières stellaires</h3>
              </Col>
              <Col>
                <Form>
                  <FormGroup>
                    <Label for="evenement"><i class="material-icons">map</i> Croisière</Label>
                    <Input type="select" name="evenement" id="espace-evenement" placeholder="Evénement">
                      <option>Croisière « Orbital »</option>
                      <option>Croisière « Sunlight »</option>
                      <option>Croisière « Jovian »</option>
                    </Input>
                  </FormGroup>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="date"><i class="material-icons">date_range</i> Date de départ</Label>
                        <Input type="date" name="date" id="espace-date" placeholder="DateReservee" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="nbpersonnes"><i class="material-icons">people</i> Nombre de personnes</Label>
                        <Input type="number" name="nbpersonnes" id="espace-nbpersonnes" placeholder="0" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className="text-center">
                    <Col>
                      <Button onClick={this.validateForm} className="reservation">Réserver <i class="material-icons">check</i></Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );

  }
}

export default withRouter(Space);
