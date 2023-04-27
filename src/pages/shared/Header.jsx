import React from "react";
import moment from "moment";
import logo from "../../assets/logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="my-4">
      <div className="text-center mb-3">
        <img src={logo} alt="photo" />
        <p className="my-2 ">Journalism Without Fear or Favour</p>
        <h5>{moment().format("dddd, MMMM Do YYYY")}</h5>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={60}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain
          — as it happened ! Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="" variant="" className="my-3">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="dark">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
