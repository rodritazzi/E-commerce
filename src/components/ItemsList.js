
import React, { Component } from 'react'
import {obtenerProductos} from './Items';

export default class ItemsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            productosPromise: []
        };

    }
    componentDidMount(){
        obtenerProductos().then(productosPromise => this.setState({productos: productosPromise}))
    }
    render(){
        return(
             productosPromise.map()   
        )
    }
}
