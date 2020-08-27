import React, { useState } from 'react';

export function Counter (){
    const [count, setCount] = useState(0)

    function decrement(){
        setCount(count - 1)
    };
    function increment(){
        setCount(count + 1)
    }


    return(

        <>
        <button onClick={decrement}> - </button>
        <span>{count}</span>
        <button onClick={increment}> + </button>
        </>  
    );
}

export default Counter