import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <ReactBootStrap.Navbar.Brand as={Link} to="/">
        Skywatcher
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto"></ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link as={Link} to="/interactwithdata">
            API Page
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2} href="#about">
            About
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};

export default Navbar;
