let timeOutID;

const funciones = {
    addPokemon: (id, paquete) => {
        const { cart, setCart, pokemons} = paquete;
        const pokemon = pokemons.filter((pokemon) => pokemon.id === id)
        setCart([...cart, ...pokemon]);
    },
    delPokemon: (id, paquete) => {
        const { cart, setCart } = paquete;
        const pokemon = cart.filter(pokemon => pokemon.id != id);
        setCart(pokemon)
    },
    primeraMayuscula: (name) => {
        return name[0].toUpperCase() + name.slice(1);
    },
    filtrado: (entrada, paquete) => {
        const { pokemons,setPokemonsFiltrados,setLoading } = paquete;
        setLoading(true);
        // Al evento oninput del campo de búsqueda le asignamos esta función,
        // que será llamada cada vez que se presione una tecla,
        // y que filtra y muestra los usuarios que coinciden con la búsqueda, con un delay o debounce de 1seg.

        // Cancelar la ejecución de la función declarada en el setTimeOut(),
        // con el identificador guardado en la variable timeOutID.
        clearTimeout(timeOutID);

        // Demorar la ejecución de la búsqueda con la función setTimeOut(),
        // esta recibe dos parámetros, la función deberá ejecutar y el tiempo de espera en mili-segundos.
        
        timeOutID = setTimeout(() => {
            const pokemonsFiltrado = pokemons.filter((pokemon) => {
                setLoading(false);
                const resultado = pokemon.name.includes(entrada.entrada);
                return resultado
            })
            setPokemonsFiltrados(pokemonsFiltrado);
        }, 500);
    }
}

export default funciones;