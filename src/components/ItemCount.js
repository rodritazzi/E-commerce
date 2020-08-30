 import React, { useState } from 'react';
 import Boton from './Boton';
 //import Input from './Input';

 export function ItemCount(){

    const [valor, setValor] = useState(0);


    function incrementar() {
        console.log("incrementa")
        setValor(valor+1);
    }

    const decrementar = () => {
        setValor(valor-1);
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

