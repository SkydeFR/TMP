import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            title: "WSC Event"
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color='light' light expand="md">
                    <NavbarBrand tag={Link} to="/">{this.state.title}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavbarElem link='/' title='Accueil' />
                            <NavbarElem link='/inscription' title="Inscription" />
                            <NavbarElem link='/connexion' title='Connexion' />
                            <NavbarElem link='/reserver' title='Réserver' />
                            <NavbarElem link='/destinations' title='Nos destinations' />
                            <NavbarElem link='/mentions-legales' title='Mentions légales' />
                        </Nav>
                    </Collapse>
                </Navbar>
                <div class="nav-underline"></div>
            </div>
        )
    }
}

class NavbarElem extends Component {

    render() {
        return (
            <NavItem>
                <NavLink tag={Link} to={this.props.link}>{this.props.title}</NavLink>
            </NavItem>
        )
    }

}

export default Navigation;