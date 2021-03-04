//sweetAler
import swal from 'sweetalert';
//emailjs
import * as emailjs from 'emailjs-com';

let timeOutID;


const funciones = {
    addPokemon: (id, paquete) => {
        const { cart, setCart, pokemons} = paquete;
        const pokemon = pokemons.filter((pokemon) => pokemon?.id === id)
        setCart([...cart, ...pokemon]);
    },
    delPokemon: (id, paquete) => {
        const { cart, setCart } = paquete;
        const pokemon = cart.filter(pokemon => pokemon.id !== id);
        setCart(pokemon)
    },
    primeraMayuscula: (name) => {
        return name[0].toUpperCase() + name.slice(1);
    },
    filtrado: (entrada, paquete) => {
        const { pokemons,setPokemonsFiltrados,setLoading } = paquete;
        setLoading(true);
        clearTimeout(timeOutID);
        
        timeOutID = setTimeout(() => {
            const pokemonsFiltrado = pokemons.filter((pokemon) => {
                setLoading(false);
                const resultado = pokemon?.name.includes(entrada.entrada);
                return resultado
            })
            setPokemonsFiltrados(pokemonsFiltrado);
        }, 500);
    },
    mostrarAlert: (nombre,id,paquete) =>{
        const {primeraMayuscula,delPokemon} = funciones;
        swal({
            title: 'Eliminar',
            text: `¿Está seguro de eliminar a ${primeraMayuscula(nombre)}?`,
            icon: 'warning',
            buttons: ["No","Si"],
            dangerMode: true
        }).then(respuesta =>{
            if(respuesta){
                delPokemon(id,paquete);
                swal({
                    text: `¡${primeraMayuscula(nombre)} fué Eliminado con Éxito!`,
                    icon: 'success'
                })
            }
        })
    },
    enviarMail: (datos,setActivo,setDatos,history) =>{
        emailjs.send('service_6sq906i','template_zyz2x9k', datos,'user_UruR9nFNkkkXSRvAD2kYZ')
                .then(() => {
                        swal({
                            title: '¡PokéBola Enviada! :D',
                            text: '¡¡Su Pokébola fué enviada a su mail. Gracias por elegirnos, Poke-Shop!!',
                            icon: 'success',
                            button: 'OK'
                        }).then(respuesta =>{
                            if(respuesta){
                                history.push("/busqueda");
                                setActivo(false);
                            }
                        })
                        setDatos({
                            email: '',
                            username: ''
                        });
		}, (err) => {
				   console.log("FAILED...", err);
		});
    }
}

export default funciones;