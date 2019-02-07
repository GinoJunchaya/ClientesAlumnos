import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

class Buscador extends Component{

    render(){
        return(
            <Form inline style={{marginLeft: "auto"}}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        );
    }
}

export default Buscador;