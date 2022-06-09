import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'; 


const Navigationbar = ({navbarItem, link}) => {
    return (
        <div>
        <Navbar color="light" expand="md" light>
            <NavbarBrand href="/">
                Main page
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
                <Nav  className="me-auto" navbar>
                    <NavItem>
                        <NavLink href={link}>
                            {navbarItem}
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    );
};

export default Navigationbar;