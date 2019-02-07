import React, {Component} from 'react';
import {Navbar, Button} from 'react-bootstrap';
import Buscador from "../Buscador";

class Menu extends Component{

    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Button onClick={this.props.showModalRegistro}>Nuevo cliente</Button>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Buscador />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;