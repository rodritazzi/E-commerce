import React from "react";
import "./NavBar.css";


export function Home(props){
    return(
        <span className="greetings">Bienvenido a tu E-commerce, {props.nombre}</span>
    );
}