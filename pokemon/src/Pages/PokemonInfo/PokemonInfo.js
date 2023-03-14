
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPokemon} from "../../api/fetchPokemons";

const PokemonInfo = () => {
    const [pokemon, setPokemon] = useState();
    const { id } = useParams();
    console.log(id, 'params')

    useEffect(() => {
        getPokemon(id).then ((data => setPokemon(data)));
    },[id])
    console.log(pokemon);


    return(
        <div className='wrapper_info'>
            <div>
                <img className='pokemonInfo_img' src={pokemon?.sprites.other.dream_world.front_default} alt='id'/>
                <h1>{pokemon?.name}</h1>
            </div>
            <div className='info_info'>
                <h4>Рост - {pokemon?.height} sm</h4>
                <h4>Вес - {pokemon?.weight} gramm</h4>
                <h4>Боевой порядок № {pokemon?.order}</h4>
                <h4>Базовый опыт {pokemon?.base_experience}</h4>
            </div>
            <div className='ability'>
                <ul> Способности:
                    <li>{pokemon?.abilities[0].ability.name}</li>
                    <li>{pokemon?.abilities[1].ability.name}</li>
                </ul>
            <div className='attack'>
                <ul> attack:
                    <li>Атака: {pokemon?.stats[1].base_stat}</li>
                    <li>Защита: {pokemon?.stats[2].base_stat}</li>
                    <li>Скорость: {pokemon?.stats[5].base_stat}</li>
                </ul>
            </div>
            </div>

        </div>
    )
}

export default PokemonInfo;