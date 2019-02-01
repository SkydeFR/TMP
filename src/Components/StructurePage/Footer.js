import React, { Component } from 'react';
import {Link as BootstrapLink} from 'reactstrap' ;
import {Link as ReactLink} from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            v:0
        }
    }

    render() {
        return (
            
            <footer class="page-footer font-small indigo">

                <div class="container text-center text-md-left">
                <div class="row">


                    <div class="col-md-3 mx-auto">
                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">WSC'Event</h5>
                    <ul class="list-unstyled">
                        <li><ReactLink tag={BootstrapLink} to="/">Accueil</ReactLink></li>
                        <li><ReactLink tag={BootstrapLink} to="/reserver">Réserver</ReactLink></li>
                        <li><ReactLink tag={BootstrapLink} to="/destinations">Nos destinations</ReactLink></li>
                        <li><ReactLink tag={BootstrapLink} to="/mentions-legales">Mentions légales</ReactLink></li>
                    </ul>
                    </div>

                    <hr class="clearfix w-100 d-md-none" />

                    <div class="col-md-3 mx-auto">
                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                    </ul>

                    </div>

                    <hr class="clearfix w-100 d-md-none" />

                    <div class="col-md-3 mx-auto">
                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
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