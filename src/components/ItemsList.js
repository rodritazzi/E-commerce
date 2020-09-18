
import React, { Component } from 'react'
import {obtenerProductos} from './Items';

export default class ItemsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            productos: []
        };

    }
    componentDidMount(){
        obtenerProductos().then(productos => this.setState({productos: productos}))
    }
    render(){
        return(
            <div>
             {this.state.productos.map(productos => <li>{productos}</li>)}
             </div>
        )
    }
}
