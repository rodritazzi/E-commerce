
import React, { Component } from 'react'

export default class ItemsList extends Component {

    constructor(props){
        super(props)
    }
    render() {
        const task = new Promise ((resolve, reject) => {

            setTimeout(() => resolve(true),5000);
        
        });
        
        task.then((res) => {
        
            return (
                <div>
                    HOLA
                </div>
            )
        
        }, (err) => {
        
            console.log(err)
        
        } );

    }
}


