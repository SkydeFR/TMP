import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
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
                <Navbar className="dark-theme" color='dark' dark expand="md">
                    <NavbarBrand tag={Link} to="/">
                        <img id="navbar-logo" src={require('../../media/image/logo.png')} alt="logo"></img>
                        {this.state.title}
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavbarElem link='/' title='Accueil' />
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Destinations
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavbarElem link='/temps' title='Le Temps' />
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavbarElem link='/espace' title={'L\'Espace'} />
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavbarElem link='/connexion' title='Connexion' />
                            <NavbarElem link='/inscription' title="Inscription" />
                        </Nav>
                    </Collapse>
                </Navbar>
                <div className="nav-underline"></div>
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