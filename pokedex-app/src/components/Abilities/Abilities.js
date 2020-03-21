import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import Ability from './Ability.js';

function Abilities() {
  const [abilities, setAbilities] = useState([]);
  const [pages, setPages] = useState(0);

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
        })
        .catch(err => {
          console.log(err, 'err');
        })
    }
    fetchData();
  }, [pages]);
  console.log(abilities);

  return(
    <>
      <button onClick={() => setPages(pages -100)}>Prev - 5</button>
      <button onClick={() => setPages(pages -20)}>Prev</button>
      <button onClick={() => setPages(pages + 20)}>Next</button>
      <button onClick={() => setPages(pages + 100)}>Next + 5</button>
      <div className='cards'>
        {abilities.map(item => <Ability abilities={item} key={item.name}/>)}
      </div>
      <button onClick={() => setPages(pages -100)}>Prev - 5</button>
      <button onClick={() => setPages(pages -20)}>Prev</button>
      <button onClick={() => setPages(pages + 20)}>Next</button>
      <button onClick={() => setPages(pages + 100)}>Next + 5</button>
    </>
  );
}

export default withRouter(Abilities);
