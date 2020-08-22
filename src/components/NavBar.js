import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
    return(
        <nav>
            <ul className="Nav-list">
                <li className="links">
                    <NavLink to="/" activeClassName="activeLink">
                        Inicio
                    </NavLink>
                    <hr />
                </li>

                <li className="links">
                    <NavLink to="/productos" activeClassName="activeLink">
                        Productos
                    </NavLink>
                    <hr />
                </li>
                <li className="links">
                    <NavLink to="/carrito" activeClassName="activeLink">
                        Carrito
                    </NavLink>
                    <hr />
                </li>
            </ul>
        </nav>
    );
}