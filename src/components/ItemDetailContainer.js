import React, { useState, useEffect }  from 'react'
import ItemDetail from './ItemDetail'
import Boton from './Boton';


export default function ItemDetailContainer() {

    const [item, setItem] = useState({});

    useEffect(() => {

        new Promise ((resolve) => {

            setTimeout(() => {
                resolve(setItem({name: "producto1", id:1}))
            }, 3000)
           }
        )
    }
);                      
return (
        <>
        <br></br>
            
            <ItemDetail product={item.name}></ItemDetail>
        </>
    );
}
