import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap'; 

function App() {

  
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">
          React App
        </NavbarBrand>
        <Collapse navbar>
          <Nav  className="me-auto" navbar>
            <NavItem>
              <NavLink href="/list">
                List of all products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/listadded">
                List of added products
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
