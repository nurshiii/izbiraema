import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <Navbar color="warning" dark expand="md">
            <Container>
                <NavLink
                    tag={RRNavLink}
                    className="navbar-brand"
                    exact to="/">
                    
                    <i class="fas fa-hamburger"></i> <span className="project-name"> <h2>Recipes 🍰</h2></span>
                </NavLink>
            <NavbarToggler onClick={this.toggleIsOpen} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/"
                            activeClassName="active">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/favorite"
                            activeClassName="active">
                            Recipes
                        </NavLink>
                    </NavItem>
                    

                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    }
}

export default Header;