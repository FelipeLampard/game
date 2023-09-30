import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="info" expand="lg">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <Link to="/" className="mr-2">
              🏘️ Home
            </Link>
            <Link to="/contacto" >
              📒 Contacto
            </Link>
          </div>
          <div>
            <Navbar.Brand className="icon">Game Center 🕹️</Navbar.Brand>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;