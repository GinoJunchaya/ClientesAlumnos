import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';

class ListaClientes extends Component{

    render(){
        var clientes = this.props.clientes;
        var clientesMostrar = clientes.map( (i) => (
            <tr>
                <td onClick={(e) => {this.handleClick(e, i)}}>{i.id}</td>
                <td onClick={(e) => {this.handleClick(e, i)}}>{i.nombre_apellido}</td>
                <td onClick={(e) => {this.handleClick(e, i)}}>{i.documento}</td>
                <td onClick={(e) => {this.handleClick(e, i)}}>{i.telefono}</td>
                <td onClick={(e) => {this.handleClick(e, i)}}>{i.direccion}</td>
                <td>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        this.props.showModalEliminar(i);
                    }}>Eliminar</Button>&nbsp;&nbsp;
                    <Button onClick={(e) => {
                        e.preventDefault();
                        this.props.showModalActualizar(i);
                    }}>Editar</Button>
                </td>
            </tr>
        ));

        return(
            <section style={{padding: "20px"}}>
                <Table bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre y apellido</th>
                            <th>Documento</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientesMostrar}
                    </tbody>
                </Table>
            </section>                
        );
    }

    handleClick(e, i){
        e.preventDefault();
        this.props.showModalConsultar(i);        
    }
}

export default ListaClientes;