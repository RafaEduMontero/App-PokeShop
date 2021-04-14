import React, { useEffect, useState} from 'react';
//React-Router
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from "react-router-dom";
//Pages
import Busqueda from '../pages/Busqueda/busqueda';
import DetalleBusqueda from '../pages/DetalleBusqueda/detalleBusqueda';
import Principal from '../pages/Principal/principal';
import Carrito from '../pages/Carrito/carrito';
import Formulario from "../pages/Formulario/formulario"
//Hooks
import use_fetch from '../hooks/use_fetch'


const Routes = () =>{

    const[pokemonsFiltrados,setPokemonsFiltrados] = useState([]);

    const [pokemons] = use_fetch();
    
    const [cart,setCart] = useState([]);

    const [loading,setLoading] = useState(false)

    const paquete = {
        pokemonsFiltrados,
        setPokemonsFiltrados,
        pokemons,
        cart,
        setCart,
        tamaño: cart.length,
        loading,setLoading
    }

    useEffect(() =>{
        let data = localStorage.getItem('cart');
        if(data !== null){
            setCart(JSON.parse(data));
        }else{
            setCart([])
        }
    },[]);

    useEffect(() =>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    return(
        <Router>
            <Switch>
            <Route exact path="/" component={Principal}/>
            <Route exact path="/busqueda">
                <Busqueda paquete={paquete}/>
            </Route>

            <Route path="/busqueda/detallebusqueda/:id">
                <DetalleBusqueda paquete={paquete}/>
            </Route>

            <Route exact path="/carrito">
                <Carrito paquete={paquete}/>
            </Route>

            <Route exact path="/formulario">
                <Formulario cart={cart}/>
            </Route>
            <Route>
                <Redirect to="/busqueda"/>
            </Route>
            </Switch>
        </Router>
    )
}

export default Routes;