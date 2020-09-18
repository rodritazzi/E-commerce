
import React, { Component } from 'react'
import Items from './Items';

export default class ItemsList extends Component {

    constructor(props){
        super(props);

        this.state = {productos: []};
    }

    componentDidMount(){
        const task = new Promise ((resolve, reject) => {

            setTimeout(() => resolve(true),5000);
       
        });
       
        task.then((res) => {
            this.setState( productos=<Items/> )
        }, (err) => {
        
            console.log(err)
       
        } );
    }

    render() {

        
             return (
                 
                 productos.map()
                 
             )
        


    }
}


