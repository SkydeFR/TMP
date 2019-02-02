import React, { Component } from 'react';
import { NavLink as BootstrapLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link as ReactLink } from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            v: 0
        }
    }

    render() {
        return (

            <footer class="page-footer font-small indigo">

                <Container>
                    <Row>
                        <Col>
                            <h5 class="font-knewave">WSC Event</h5>
                            <hr />
                            <ul class="list-unstyled">
                                <li><ReactLink tag={BootstrapLink} to="/connexion">Espace Personnel</ReactLink></li>
                                <li><ReactLink tag={BootstrapLink} to="/destinations">Le Temps</ReactLink></li>
                                <li><ReactLink tag={BootstrapLink} to="/connexion">L'Espace</ReactLink></li>
                                <li><ReactLink tag={BootstrapLink} to="/reserver">Réservations</ReactLink></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 class="font-knewave">WSC Team</h5>
                            <hr />
                            <ul class="list-unstyled">
                                <li>Yan Buatois</li>
                                <li>Kévin Kibongui</li>
                                <li>Ange Pagel</li>
                                <li>Julien Pinto Da Fonseca</li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>Réseaux</h5>
                            <hr />
                            <ul class="list-unstyled">
                                <li><a href="javascript:void(0);">Twitter</a></li>
                                <li><a href="javascript:void(0);">Instagram</a></li>
                                <li><a href="javascript:void(0);">Pinterest</a></li>
                                <li><a href="javascript:void(0);">LinkedIn</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>Hébergeur</h5>
                            <hr />
                            <ul class="list-unstyled">
                                <li><a href="http://esirem.u-bourgogne.fr/">ESIREM</a></li>
                                <li>9 Avenue Alain Savary,</li>
                                <li>21000 Dijon</li>
                                <li><a href="tel:33380396009">+33 3 80 39 60 09</a></li>
                            </ul>
                        </Col>

                    </Row>
                </Container>

                <div id="copyright" className="dark-theme">
                    <span>©2019 <span class="font-knewave">WSC Event</span>. Tous droits réservés.</span>
                </div>


            </footer>
        )
    }
}

export default Footer;