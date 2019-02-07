import React, {Component} from 'react';
import Header from '../Header';
import ListaClientes from './ListaClientes';
import Menu from './Menu';
import ModalAltaCliente from './ModalAltaCliente';
import ModalActualizarCliente from './ModalActualizarCliente';
import ModalConfirmarEliminar from './ModalConfirmarEliminar';
import ModalConsultarCliente from './ModalConsultarCliente';

class Clentes extends Component{

    constructor(props, context){
        super(props);
        this.state = {
            showModalRegistro: false,
            showModalActualizar: false,
            showModalConfirmarEliminar: false,
            showModalConsultarCliente: false,
            clienteAccion: undefined,
        }
    }

    render(){
        var clientes = this.getClientes();
        return(
            <section>
                <Header />
                <Menu showModalRegistro={this.showModalRegistro.bind(this)}/>
                <ListaClientes clientes={clientes} showModalActualizar={this.showModalActualizar.bind(this)} showModalEliminar={this.showModalEliminar.bind(this)} showModalConsultar={this.showModalConsultar.bind(this)}/>
                <ModalAltaCliente show={this.state.showModalRegistro} closeModal={this.closeModalRegistro.bind(this)}/>
                <ModalActualizarCliente show={this.state.showModalActualizar} closeModal={this.closeModalActualizar.bind(this)} cliente={this.state.clienteAccion}/>
                <ModalConfirmarEliminar show={this.state.showModalConfirmarEliminar} closeModal={this.closeModalEliminar.bind(this)} cliente={this.state.clienteAccion}/>
                <ModalConsultarCliente show={this.state.showModalConsultarCliente} closeModal={this.closeModalConsultar.bind(this)} cliente={this.state.clienteAccion}/>
            </section>
        );
    }

    closeModalRegistro(){
        this.setState({showModalRegistro: false});
    }

    showModalRegistro(){
        this.setState({showModalRegistro: true});
    }

    closeModalActualizar(){
        this.setState({showModalActualizar: false});
    }

    showModalActualizar(i){
        this.setState({showModalActualizar: true, clienteAccion: i});
    }

    closeModalEliminar(){
        this.setState({showModalConfirmarEliminar: false});
    }

    showModalEliminar(i){
        this.setState({showModalConfirmarEliminar: true, clienteAccion: i});
    }

    closeModalConsultar(){
        this.setState({showModalConsultarCliente: false});
    }

    showModalConsultar(i){
        this.setState({showModalConsultarCliente: true, clienteAccion: i});
    }
    
    getClientes(){
        var clientes = [{
            id: 1,
            nombre_apellido: "Gino Junchaya",
            documento: 7499674,
            telefono: "(0982) 246 - 757",
            direccion: "Villa Hayes - Remansito"
        },
        {
            id: 2,
            nombre_apellido: "Ivan Medina",
            documento: 1892382,
            telefono: "(0981) 123 - 321",
            direccion: "Capiatá - Paraguay"
        },
        {
            id: 3,
            nombre_apellido: "Miguel Mendoza",
            documento: 89123723,
            telefono: "(0981) 129 - 231",
            direccion: "Capiatá - Paraguay"
        }];
        return clientes;
    }

}

export default Clentes;