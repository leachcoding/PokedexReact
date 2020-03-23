import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import './AbilityStats.css';
import {Link, Route} from 'react-router-dom';
import StatsPage from '../StatsPage/StatsPage.js';

const AbilityStats = (props) => {
  const [ability, setAbility] = useState([]);
  const [text, setText] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const abilityId = props.match.params.id;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/ability/' + abilityId)
        .then(res => {
          console.log(res.data);
          setAbility(res.data);
          console.log(res.data);
          //Text
          setText(res.data.flavor_text_entries[21]);
          //Pokemon
          console.log(res.data.pokemon);
          setPokemon(res.data.pokemon);
          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });

    };

    fetchData();
  }, [abilityId]);

  console.log(ability);
  console.log(pokemon);
  console.log(text);
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  if(loading) return <p>I'm Loading! Please be patient</p>;
  return(
    <>
      <div className='types'>
        <p className='text'>Ability: {capitalize(ability.name)}</p>
        <p className='text'>Effect: {text.flavor_text}</p>
        <p className='text'>Pokemon:</p>
        <div className='pokemonRow'>
        {pokemon.map(e => {
          return (
            <>
            <Link to={`/detail/${e.pokemon.name}`}><p>{capitalize(e.pokemon.name)}</p></Link>
            <Route exact path='detail/:id' component={StatsPage}/>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default withRouter(AbilityStats);
