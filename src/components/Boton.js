import React, { Component } from 'react'

export default class Boton extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
               <button>{this.props.sign}</button> 
            </div>
        )
    }
}
