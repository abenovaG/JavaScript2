


export const sortItem = (pokemonList = [], type)  => {
    switch (type) {
        case 'weight':
            return pokemonList.sort((a, b) => b.weight - a.weight);
        case 'attack':
            return pokemonList.sort((a, b ) => b.stats[0].base_stat - a.stats[0].base_stat)
        default:
            return pokemonList;
    }

}