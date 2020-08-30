 import React, { useState } from 'react';
 import Boton from './Boton';
 //import Input from './Input';

 export function ItemCount(props){

    const [valor, setValor] = useState(0);
    
    
    function incrementar() {
        if (valor<props.max){
        setValor(valor+1);
        }
    }

    const decrementar = () => {
        if (valor>props.min) {
            setValor(valor-1);
        }
        
    }
  
     return(
        <>
            <div>
                <Boton onClick={incrementar} sign={"+"}/>
                <input value={valor} readOnly={true}></input>
                <Boton onClick={decrementar} sign={"-"}/>
            </div>
        </>
     );
 }

 export default ItemCount
