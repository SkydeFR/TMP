import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './Time.css';


const items = [
  {
    src: require('../../media/image/temps/carousel/japon-imperial.png'),
    altText: 'Japon Impérial',
    caption: 'Japon Impérial'
  },
  {
    src: require('../../media/image/temps/carousel/egypte-ancienne.png'),
    altText: 'Egypte Antique',
    caption: 'Egypte Antique'
  },
  {
    src: require('../../media/image/temps/carousel/grece-antique.png'),
    altText: 'Grèce Antique',
    caption: 'Grèce Antique'
  }
  
];


class Time extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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

        <section id="temps-epoques">
          <Container>
            <Row>
              <Col>
              <h2>Choisissez votre époque</h2>
              <h3>Lorem ipsum</h3>
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
      </div>
    );
  }
}

export default Time;
