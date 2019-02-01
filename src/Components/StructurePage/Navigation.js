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

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            currentPage: 0
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
            <NavbarBrand href="/">Barre de navigation</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Accueil</NavLink> {/* Présentation de la machine + témoignages d'anciens clients + l'équipe + entreprise ? */}
                    </NavItem>
                    <NavItem>
                        <NavLink href="/reserver">Réserver</NavLink> {/* Réservation avec formulaire */}
                    </NavItem>
                    <NavItem>
                        <NavLink href="/destinations">Nos destinations</NavLink> {/* Voyages et prestations possibles */}
                    </NavItem>
                    <NavItem>
                        <NavLink href="/mentions-legales">Mentions légales</NavLink> {/* Mentions légales */}
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
            </div>
        )
    }
}

class NavbarElem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            link: this.props.link
        }
    }

    render() {
        return (
            <li>
                <Link to='{this.state.link}'>{this.state.title}</Link>
            </li>
        )
    }

}

//<NavbarElem title='Accueil' link='/' />

export default Navigation;