import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from '../.././images/logo.png'

// header area
const Header = () => {

    const {user, logOut} = useAuth()
  return (
    <div className="mb-5 pb-3">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <NavLink to="/home"><img src= {logo} alt="logo" /> </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <NavLink
                className="text-decoration-none fw-bolder me-5"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="text-decoration-none fw-bolder me-5"
                to="/manageServices"
              >
                Manage Services
              </NavLink>
              <NavLink
                className="text-decoration-none fw-bolder me-5"
                to="/addService"
              >
                Add Service
              </NavLink>
              <NavLink
                className="text-decoration-none fw-bolder me-5"
                to="/contact"
              >
                Contact Us
              </NavLink>
              {/* Username */}
              <img className="rounded-circle me-3" width="30px" src= {user.photoURL} alt="" />
              <a className="text-decoration-none fw-bolder me-3" href="#login">{user?.displayName}</a>
             {
                 user?.email? <Button  onClick={logOut} className="" variant="secondary" size="sm">Log Out</Button>:<NavLink className="text-decoration-none fw-bolder me-5 bg-warning rounded-pill px-3" to="/login">Log In</NavLink>
             }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
