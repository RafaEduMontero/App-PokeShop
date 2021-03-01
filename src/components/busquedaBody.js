import React,{Fragment,useState} from 'react';
//react-Paginate
import ReactPaginate from 'react-paginate';
//Atomics
import CardField from '../atomics/card_field';
import PokeNoEncontrado from '../atomics/poke_no_encontrado';
import Spinner from '../atomics/spinner';

const BusquedaBody = ({paquete,entrada}) =>{
    const {pokemonsFiltrados,pokemons,loading} = paquete;
    
    const [currentPage,setCurrentPage] = useState(0);

    const arrayPokemons = entrada === '' ? pokemons : pokemonsFiltrados

    const PER_PAGE = 12;
    const offset = currentPage * PER_PAGE;
    let currentPagePokemons = arrayPokemons;

    const mostrarNoEncontrado = entrada != '' && !loading && arrayPokemons.length == 0 ;

    if(mostrarNoEncontrado){
        return(
            <PokeNoEncontrado/>
        )
    }

    if(arrayPokemons.length == 0){
        return(
            <Spinner/>
        )
    }
    // if(arrayPokemons.length !=0){
    //     {entrada === '' && <Spinner/>}
        currentPagePokemons = arrayPokemons.slice(offset, offset + PER_PAGE).map((pokemon,i) =>{
            return(
                <CardField key={i} pokemon={pokemon} i={i} paquete={paquete}/>
            )
        })
    // }else{
    //     {entrada !== '' ? <PokeNoEncontrado/>}
    // }

    const pageCount = Math.ceil(arrayPokemons.length / PER_PAGE);

    const handlePageClick = ({selected}) =>{
        setCurrentPage(selected);
    }

    return(
        <Fragment>
            <div className="row">
                {currentPagePokemons}
            </div>
            <nav className="row pagination pagination-sm justify-content-center align-items-center fixed-bottom">
                    <ReactPaginate
                        previousLabel={""}
                        nextLabel={""}
                        breakLabel={"..."}
                        breakClassName={"page-link"}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        pageLinkClassName={"page-link bg-info text-white"}
                        containerClassName={"pagination rounded-circle pt-3"}
                        disabledClassName={"page-item disabled"}
                        activeClassName={"page-item active bg-danger"}
                    />
            </nav>
        </Fragment>
    )
}

export default BusquedaBody;