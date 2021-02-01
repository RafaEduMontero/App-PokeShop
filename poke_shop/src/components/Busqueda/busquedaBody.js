import React,{Fragment,useState} from 'react';
//react-Paginate
import ReactPaginate from 'react-paginate';
//Components
import CardField from '../../atomics/card_field';

const BusquedaBody = ({pokemons}) =>{
    
    const [currentPage,setCurrentPage] = useState(0);

    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;

    const currentPagePokemons = pokemons.slice(offset, offset + PER_PAGE).map((pokemon,i) =>{
        return(
            <CardField pokemon={pokemon} i={i}/>
        )
    })

    const pageCount = Math.ceil(pokemons.length / PER_PAGE);

    const handlePageClick = ({selected}) =>{
        setCurrentPage(selected);
    }

    return(
        <Fragment>
            <div className="row">
                {currentPagePokemons}
            </div>
            <nav className="col-12">
                    <ReactPaginate
                        previousLabel={""}
                        nextLabel={""}
                        breakLabel={"..."}
                        breakClassName={"page-link"}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        pageLinkClassName={"page-link"}
                        containerClassName={"pagination"}
                        previousClassName={"page-link"}
                        disabledClassName={"page-item disabled"}
                        activeClassName={"page-item active"}
                    />
            </nav>
        </Fragment>
    )
}

export default BusquedaBody;