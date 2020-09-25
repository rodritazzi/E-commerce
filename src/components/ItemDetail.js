import React, { Component } from 'react'

export default class ItemDetail extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
               {this.props.product} 
            </div>
        )
    }
}
