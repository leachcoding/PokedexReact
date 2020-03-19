import React, {useState,useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router';
import Pokemon from '../Pokemon/Pokemon.js';
import './PokemonList.css';

function PokemonList(props) {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const filter = props.filter;

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

  useEffect(() => {
    const fetchNewData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/type/fire/`)
        .then(res => {
          console.log(res.data);
          let pokemonValue = res.data.pokemon;
          pokemonValue.map(pokemon => {
            let regexPat = /\/pokemon\/(\d+)\//;
            let id = pokemon.url.match(regexPat)[1];
            return (pokemon['id'] = id);
          })
          setNewData(pokemonValue)
        })
        .catch(err => {
          console.log(err, "ERROR");
        });
    };
    fetchNewData();
  }, []);
  console.log(newData,"This is line 57");
  console.log(data, "This is data line 58");
  if (newData.length > 0) {
    return (
      <>
        <div className='cards'>
          {newData.map(item => <Pokemon data={item} key={item.name} />)}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='cards'>

          {data.map(item => <Pokemon data={item} key={item.name}/>)}
        </div>
      </>
    );
  }
}

export default withRouter(PokemonList);
