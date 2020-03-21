import React, {useState,useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router';
import Ability from './Ability.js';

function Abilities() {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/ability/')
        .then( res => {
          let abilityValue = res.data.results;
          abilityValue.map(ability => {
            let regexPat = /\/ability\/(\d+)\//;
            let id = ability.url.match(regexPat)[1];
            return(ability['id'] = id);
          })
          setAbilities(abilityValue);
          console.log(res.data.results);
        })
        .catch(err => {
          console.log(err, 'err');
        })
    }
    fetchData();
  }, []);
  console.log(abilities);

  return(
    <>
      <div className='cards'>
        {abilities.map(item => <Ability ability={item} key={item.name}/>)}
      </div>
    </>
  );
}

export default withRouter(Abilities);
