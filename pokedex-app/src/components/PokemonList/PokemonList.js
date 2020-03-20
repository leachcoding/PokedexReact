import React, {useState,useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router';
import Pokemon from '../Pokemon/Pokemon.js';
import './PokemonList.css';

function PokemonList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
          // console.log(res.data, "THIS IS POKEMON LIST RES.DATA");
          // console.log(res.data.results, "THIS IS POKEMON LIST RES.DATA.RESULTS");
          let pokemonValue = res.data.results;
          pokemonValue.map(pokemon => {
            let regexPat = /\/pokemon\/(\d+)\//;
            let id = pokemon.url.match(regexPat)[1];
            return (pokemon['id'] = id);
          })
          setData(pokemonValue)
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    };

    fetchData();
    // console.log(data, "THIS IS DATA");
  }, []);

  console.log(data, "This is data line 58");
    return (
      <>
        <div className='cards'>
          {data.map(item => <Pokemon data={item} key={item.name}/>)}
        </div>
      </>
    );

}

export default withRouter(PokemonList);
