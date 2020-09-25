import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar";
import {Home} from "./components/Home.js"
import {ItemCount} from "./components/ItemCount.js"
import ItemLists from "./components/ItemsList.js"
import ItemDetailContainer from "./components/ItemDetailContainer"



function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <span className="inner-text">Inicio</span><br/>
            <Home nombre="Felipe"/>
            <ItemLists/>
          </Route>
          <Route exact path="/productos">
            <span className="inner-text">Productos</span>
          </Route>
          <Route exact path="/carrito">
            <span className="inner-text">Carrito</span>
            <ItemCount min={0} max={10}/>
            <ItemDetailContainer/>

          </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
