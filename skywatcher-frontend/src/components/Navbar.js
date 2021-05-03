import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "../App.js";
import { Button } from "react-bootstrap";

const Navbar = () => {
    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand href="#home">Skywatcher</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                    <Button variant="outline-dark" size="sm">{" "}
                        <ReactBootStrap.Nav.Link href="#api">API Page</ReactBootStrap.Nav.Link>
                    </Button>
                    <Button variant="outline-dark" size="sm">
                        <ReactBootStrap.Nav.Link eventKey={2} href="#about">
                            About
                        </ReactBootStrap.Nav.Link>
                        </Button>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                    </ReactBootStrap.Navbar>

    );
    };
  
  export default Navbar;