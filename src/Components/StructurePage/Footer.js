import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

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

                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                    <ul class="list-unstyled">
                        <li>
                        <a href="#!">Very long link 1</a>
                        </li>
                        <li>
                        <a href="#!">Very long link 2</a>
                        </li>
                        <li>
                        <a href="#!">Very long link 3</a>
                        </li>
                        <li>
                        <a href="#!">Very long link 4</a>
                        </li>
                    </ul>

                    </div>

                    <hr class="clearfix w-100 d-md-none" />

                    <div class="col-md-3 mx-auto">

                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                    <ul class="list-unstyled">
                        <li>
                        <a href="#!">Link 1</a>
                        </li>
                        <li>
                        <a href="#!">Link 2</a>
                        </li>
                        <li>
                        <a href="#!">Link 3</a>
                        </li>
                        <li>
                        <a href="#!">Link 4</a>
                        </li>
                    </ul>

                    </div>

                    <hr class="clearfix w-100 d-md-none" />

                    <div class="col-md-3 mx-auto">

                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                        <a href="#!">Link 2</a>
                        </li>
                        <li>
                        <a href="#!">Link 3</a>
                        </li>
                        <li>
                        <a href="#!">Link 4</a>
                        </li>
                    </ul>

                    </div>

                    <hr class="clearfix w-100 d-md-none" />

                        <div class="col-md-3 mx-auto">

                        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                        <ul class="list-unstyled">
                            <li>
                            <a href="#!">Link 1</a>
                            </li>
                            <li>
                            <a href="#!">Link 2</a>
                            </li>
                            <li>
                            <a href="#!">Link 3</a>
                            </li>
                            <li>
                            <a href="#!">Link 4</a>
                            </li>
                        </ul>

                        </div>

                </div>

                </div>

                <div class="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>

            </footer>
        )
    }
}

export default Footer;