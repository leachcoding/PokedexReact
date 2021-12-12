import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import Pokemon from '../Pokemon/Pokemon.js';
import SearchForm from '../Search/SearchBar.js';
import './PokemonList.css';

function PokemonList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=${pages}&limit=20/`)
        .then(res => {
          // console.log(res.data, "THIS IS POKEMON LIST RES.DATA");
          // console.log(res.data.results, "THIS IS POKEMON LIST RES.DATA.RESULTS");
          console.log(pages)
          let pokemonValue = res.data.results;
          pokemonValue.map(pokemon => {
            let regexPat = /\/pokemon\/(\d+)\//;
            let id = pokemon.url.match(regexPat)[1];
            return (pokemon['id'] = id);
          })
          setData(pokemonValue)
          setLoading(false);
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    };

    fetchData();
    // console.log(data, "THIS IS DATA");
  }, [pages]);

  // console.log(data, "This is data line 58");
    if(loading) return <p>I'm Loading! Please be patient</p>;
    return (
      <>
      <div className = 'paginationRow'>
        <button onClick={() => pages - 100 >= 0 ? setPages(pages -100) : alert('Please choose a different page selection. Cannot navigate back to a prior page that does not exist')}>Prev - 5</button>
        <button onClick={() => pages - 20 >= 0 ? setPages(pages -20) : alert('Please choose a different page selection. Cannot navigate back to a prior page that does not exist')}>Prev</button>
        <button onClick={() => pages + 20 <= 1100 ? setPages(pages + 20) : alert('Please choose a different page selection. Cannot navigate back to a prior page that does not exist')}>Next</button>
        <button onClick={() => pages + 100 <= 1100 ? setPages(pages + 100) : alert('Please choose a different page selection. Cannot navigate back to a prior page that does not exist')}>Next + 5</button>
      </div>
      <SearchForm />
      <div className='cards'>
        {data.map(item => <Pokemon data={item} key={item.name}/>)}
      </div>
      <div className = 'paginationRow'>
        <button onClick={() => pages - 100 >= 0 ? setPages(pages -100) : alert('Please choose a different page selection. Cannot navigate back to a prior page that does not exist')}>Prev - 5</button>
        <button onClick={() => pages - 20 >= 0 ? setPages(pages -20) : alert('Please choose a different page selection. Cannot navigate back to a prior page that does not exist')}>Prev</button>
        <button onClick={() => pages + 20 <= 1100 ? setPages(pages + 20) : alert('Please choose a different page selection. Cannot navigate back to a prior page that does not exist')}>Next</button>
        <button onClick={() => pages + 100 <= 1100 ? setPages(pages + 100) : alert('Please choose a different page selection. Cannot navigate back to a prior page that does not exist')}>Next + 5</button>
      </div>
      </>
    );

}

export default withRouter(PokemonList);
