import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalConfirmarEliminar extends Component {

    render() {

        var cliente = this.props.cliente;
        if(cliente === undefined){
            return (
                <span></span>
            );
        }

        return (
            <Modal show={this.props.show} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar eliminar</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.cliente.nombre_apellido}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.closeModal}>Confirmar</Button>
                    <Button variant="secondary" onClick={this.props.closeModal}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}

export default ModalConfirmarEliminar;