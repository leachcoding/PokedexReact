import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import Ability from './Ability.js';
import AbilitiesSearch from '../Search/AbilitiesSearch';

function Abilities() {
  const [abilities, setAbilities] = useState([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/ability?offset=${pages}&limit=20/`)
        .then( res => {
          let abilityValue = res.data.results;
          abilityValue.map(ability => {
            let regexPat = /\/ability\/(\d+)\//;
            let id = ability.url.match(regexPat)[1];
            return(ability['id'] = id);
          })
          setAbilities(abilityValue);
          console.log(abilityValue);
          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        })
    }
    fetchData();
  }, [pages]);
  console.log(abilities);
  if(loading) return <p>I'm Loading! Please be patient</p>;
  return(
    <>
    <div className = 'paginationRow'>
      <button onClick={() => setPages(pages -100)}>Prev - 5</button>
      <button onClick={() => setPages(pages -20)}>Prev</button>
      <button onClick={() => setPages(pages + 20)}>Next</button>
      <button onClick={() => setPages(pages + 100)}>Next + 5</button>
    </div>
    <AbilitiesSearch />
      <div className='cards'>
        {abilities.map(item => <Ability abilities={item} key={item.name}/>)}
      </div>
      <div className = 'paginationRow'>
        <button onClick={() => setPages(pages -100)}>Prev - 5</button>
        <button onClick={() => setPages(pages -20)}>Prev</button>
        <button onClick={() => setPages(pages + 20)}>Next</button>
        <button onClick={() => setPages(pages + 100)}>Next + 5</button>
      </div>
    </>
  );
}

export default withRouter(Abilities);
