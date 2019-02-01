import React, { Component } from 'react';
import { NavLink as BootstrapLink } from 'reactstrap';
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

                <div class="container text-center text-md-left">
                    <div class="row">


                        <div class="col-md-3 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Editeur</h5>
                            <ul class="list-unstyled">
                                <li>Les Témoins de JavaScript :</li>
                                <li>- Yan BUATOIS</li>
                                <li>- Ange PAGEL</li>
                                <li>- Kévin KIBONGUI</li>
                                <li>- Julien PINTO DA FONSECA</li>
                            </ul>
                        </div>

                        <hr class="clearfix w-100 d-md-none" />

                        <div class="col-md-3 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">WSC'Event</h5>
                            <ul class="list-unstyled">
                                <li><ReactLink tag={BootstrapLink} to="/">Accueil</ReactLink></li>
                                <li><ReactLink tag={BootstrapLink} to="/reserver">Réserver</ReactLink></li>
                                <li><ReactLink tag={BootstrapLink} to="/destinations">Nos destinations</ReactLink></li>
                                <li><ReactLink tag={BootstrapLink} to="/connexion">Connexion</ReactLink></li>
                                <li><ReactLink tag={BootstrapLink} to="/inscription">Inscription</ReactLink></li>
                            </ul>
                        </div>

                        <hr class="clearfix w-100 d-md-none" />

                        <div class="col-md-3 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Hébergeur</h5>
                            <ul class="list-unstyled">
                                <li>ESIREM</li>
                                <li>9 Avenue Alain Savary,</li>
                                <li>21000 Dijon</li>
                                <li>+33 3 80 39 60 09</li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div class="footer-copyright text-center py-3">© 2019 Les Témoins de Javascript</div>

            </footer>
        )
    }
}

export default Footer;