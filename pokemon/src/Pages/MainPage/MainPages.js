import {useState} from "react";
import {fetchPokemonS, fetchPokemons} from "../../api/fetchPokemons";
import {useEffect} from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";

const MainPages = () => {
    const [offset, setOffset] = useState(10);
    const [list,setList] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);


    const limit = 10;
    useEffect(() => {
        fetchPokemons(10, 20)
            .then((data)=> {
                setList(data.results)
                setPageCount(Math.ceil(data.count / 10))
            })
    }, [offset])
    const handleChangeOfPage = (type) => {
        if(type === 'next') {
            setOffset(prev => prev += 10)
            setPage(prev => prev += 1)
        }
        else {
            if(offset <= 10) return
            setOffset(prev => prev - 10 )
        }
    }

    return (
        <div className='mainPage'>
            <div>
                <div className='container'>
                    <div className='pokemonList'>
                        {list.map(pokemon => <PokemonCard pokemon={pokemon} />)}
                    </div>
                </div>

                <Pagination
                    pageCount={pageCount}
                    changeOffset={handleChangeOfPage}
                    page={page}
                />
            </div>
        </div>

    )
}

export default MainPages;