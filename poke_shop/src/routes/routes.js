import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Busqueda from '../pages/Busqueda/busqueda';
import Principal from '../pages/Principal/principal';

const Routes = () =>{
    return(
        <Router>
            <Route exact path="/" component={Principal}/>
            <Route exact path="/busqueda" component={Busqueda}/>
        </Router>
    )
}

export default Routes;