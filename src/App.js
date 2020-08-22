import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar";

//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <span className="inner-text">Inicio</span>
          </Route>
          <Route exact path="/productos">
            <span className="inner-text">Productos</span>
          </Route>
          <Route exact path="/carrito">
            <span className="inner-text">Carrito</span>
          </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
