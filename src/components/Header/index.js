import React, { Component } from 'react';
import {
  Navbar
} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><h2>Clientes</h2></Navbar.Brand>
        </Navbar>
    );
  }
}

export default Header;
