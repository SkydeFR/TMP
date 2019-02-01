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
            title: "Barre de navigation"
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
            <NavbarBrand href="/">{this.state.title}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavbarElem link='/' title='Accueil'  />
                    <NavbarElem link='/reserver' title='Réserver' />
                    <NavbarElem link='/destinations' title='Nos destinations' />
                    <NavbarElem link='/mentions-legales' title='Mentions légales' />
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
            <NavItem>
                <NavLink href={this.state.link}>{this.state.title}</NavLink>
            </NavItem>
        )
    }

}

export default Navigation;