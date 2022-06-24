import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNav = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="title"><h1>Pablo Rodríguez</h1></Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link>Sobre Mi</Nav.Link>
          <Nav.Link>Mis Habilidades</Nav.Link>
          <Nav.Link>Proyectos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
