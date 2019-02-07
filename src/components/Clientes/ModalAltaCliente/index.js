import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalAltaCliente extends Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.closeModal}>Registrar</Button>                    
                    <Button variant="secondary" onClick={this.props.closeModal}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}

export default ModalAltaCliente;