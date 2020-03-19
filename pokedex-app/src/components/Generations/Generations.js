import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import Pokemon from '../Pokemon/Pokemon.js';
import '../PokemonList/PokemonList.css';

const Generations = (props) => {
  const [data, setData] = useState([]);


  const genId = props.match.params.id;
  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/generation/' + genId)
        .then(res => {
          let pokemonData = res.data.pokemon_species;
          let sortedPokemon = pokemonData.sort(sortPokemon);
          sortedPokemon.map(pokemon => {
            let regexId = /\/pokemon-species\/(\d+)\//;
            let id = pokemon.url.match(regexId)[1];
            return (pokemon['id'] = id);
          })
          setData(sortedPokemon);
        });
    }
    const sortPokemon = (a, b) => {
    let regexPat = /\/pokemon-species\/(\d+)\//;
    let Aid = a.url.match(regexPat)[1];
    let Bid = b.url.match(regexPat)[1];
    return Aid - Bid;
  };
    fetchData();
  }, [genId]);
  console.log(data, "LINE 30");
  return (
    <>
    <div className='cards'>
    {data.map(item => <Pokemon data={item} key={item.name}/>)}
    </div>
    </>
  );
}

export default withRouter(Generations);
