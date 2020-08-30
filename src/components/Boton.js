import React, { Component } from 'react'

export default class Boton extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
               <button onClick={this.props.onClick}>{this.props.sign}</button> 
            </div>
        )
    }
}
