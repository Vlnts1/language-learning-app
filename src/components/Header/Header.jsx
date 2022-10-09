import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"> Language Learning App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
