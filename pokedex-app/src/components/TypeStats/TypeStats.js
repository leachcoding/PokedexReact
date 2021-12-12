import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import {Link, Route} from 'react-router-dom';
import StatsPage from '../StatsPage/StatsPage.js';
import MoveStats from '../MoveStats/MoveStats.js';
import './TypeStats.css';

const TypeStats = (props) => {
  const [type, setType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [move, setMove] = useState([]);
  const [pokemon, setPokemon] = useState([]);


  const typeId = props.match.params.id;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/type/' + typeId)
        .then(res => {
          console.log(res.data);
          setType(res.data);
          setMove(res.data.moves.map(el => el.name))
          setPokemon(res.data.pokemon.map(el => el.pokemon.name));
          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        })
    };

    fetchData();
  }, [typeId]);

  console.log(type, "Type");
  console.log(pokemon, "pokemon");
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  if(loading) return <p>I'm Loading! Please be patient</p>;
  return (
    <>
      <div className='types'>
        <p className='text'>{type.id} -- {capitalize(type.name)}</p>
        <p className='text'>Moves:</p>
        <div className='pokemonRow'>
        {move.map(el => {
          return (
            <>
            <Link to={`/moves/${el}`}><p className='moveType'>{capitalize(el)}</p></Link>
            <Route exact path='moves/:id' component={MoveStats}/>
            </>
          );
        })}
        </div><br/>
        <p className='text'>Pokemon:</p>
        <div className='pokemonRow'>
        {pokemon.map(el => {
          return (
            <>
            <Link to={`/detail/${el}`}><p className='pokemonType'>{capitalize(el)}</p></Link>
            <Route exact path='detail/:id' component={StatsPage}/>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default withRouter(TypeStats);
