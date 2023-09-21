import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Thumbnail from '../images/SP-Thumbnail.png';
import React from 'react';

export default function Bar() {
  return (
    <>
      <Navbar className="custom-navbar" data-bs-theme="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/"><img src={Thumbnail} width="55px" height="55px" alt="Logo"></img></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}