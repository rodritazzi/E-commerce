import React, { Component } from "react";
import MercadoLibre from './MercadoLibre.jpg'
//const MercadoLibre = require('./MercadoLibre.jpg')
import "./NavBar.css";

class Cartlcon extends Component{
    render () {
        return <img className="MercadoLibre" src={MercadoLibre} alt="Mercado Libre"/>
    }
}

export default Cartlcon;