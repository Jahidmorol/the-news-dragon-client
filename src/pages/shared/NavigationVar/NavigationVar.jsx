import React from "react";
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const NavigationVar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="" variant="" className="my-3">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/category/0" className="text-decoration-none ms-4 text-black">
                Home
              </Link>
              <Link className="text-decoration-none ms-4 text-black">
                About
              </Link>
              <Link className="text-decoration-none ms-4 text-black">
                Career
              </Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle
                  style={{ fontSize: "2rem", margin: "4px 10px 0 0" }}
                ></FaUserCircle>
              )}

              {user ? (
                <Button variant="dark">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationVar;
