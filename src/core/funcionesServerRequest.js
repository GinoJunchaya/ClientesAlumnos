import axios from 'axios';
var urlEndpoint = "https://clients-backend.herokuapp.com/contabilidad/";
var clientes = "clientes";

export function getClientes(){
    axios.get(urlEndpoint+clientes)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}