import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../images/logo-no-background.png'

class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect className="navbar-color " >
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              width="100"
              height="70"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  className = "fs-3 text-white mx-3" href="/features">Features</Nav.Link>
              <Nav.Link  className = "fs-3 text-white mx-3" href="/pricing">Pricing</Nav.Link>
              <Nav.Link  className = "fs-3 text-white mx-3" href="/pricing">About Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link  className = "fs-3 text-white mx-3" href="/login">Log In</Nav.Link>
              <Nav.Link  className = "fs-3 text-white mx-3" eventKey={2} href="/signup">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Navigation
