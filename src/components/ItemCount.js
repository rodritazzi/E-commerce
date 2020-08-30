 import React, { useState } from 'react';
 import Boton from './Boton';
 import Input from './Input';

 export function ItemCount(props){

    const [valor, setValor] = useState(0);
    
    
    function incrementar() {
        if (valor<props.max){
        setValor(valor+1);
        }
    }

    function decrementar() {
        if (valor>props.min) {
            setValor(valor-1);
        }
        
    }

    function itemsAgregados() {
        let items = valor
        alert(items+" items han sido agregados a su carrito")
    }
  
     return(
        <>
            <div>
                <Boton onClick={incrementar} sign={"+"}/>
                <Input value={valor} readOnly={true}></Input>
                <Boton onClick={decrementar} sign={"-"}/>
                <Boton onClick={itemsAgregados} sign={"agregar al carrito"}/>
            </div>
        </>
     );
 }

 export default ItemCount
