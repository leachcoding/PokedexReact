import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import './StatsPage.css';

const StatsPage = (props) => {
  const [data, setData] = useState([]);
  const [abilityVal, setAbilityVal] = useState([]);
  const [abilityUrl, setAbilityUrl] = useState([]);
  const [heldItems, setItems] = useState([]);
  const [moves, setMoves] = useState([]);
  const [stats, setStats] = useState([]);
  const [statsBase, setStatsBase] = useState([]);
  const [types, setTypes] = useState([]);

  const maxStats = [180, 250, 194, 250, 190, 255];

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const pokeId = props.match.params.id;
  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/' + pokeId)
        .then(res => {
          console.log('res.data get request', res.data);
          console.log('res get request', res);
          console.log(res.data.abilities);

          // Main Data
          setData(res.data);
          // Abilities
          if(res.data.abilities.length > 0){
            setAbilityVal(res.data.abilities.map(element =>  element.ability.name))
            setAbilityUrl(res.data.abilities.map(element =>
            element.ability.url))
          } else {
            setAbilityVal(res.data.abilities[0].ability.name)
            setAbilityUrl(res.data.abilities[0].ability.url)
          }
          // Held Items
          if(res.data.held_items.length > 0){
            setItems(res.data.held_items.map(element => element.item.name))
          } else {
            setItems(["No Held Items"])
          }
          // Moves
          if(res.data.moves.length > 0){
            setMoves(res.data.moves.map(element => element.move.name))
          } else {
            setMoves(res.data.moves[0].move.name)
          }
          // Stats
          if(res.data.stats.length > 0){
            setStats(res.data.stats.map(element => element.stat.name))
          } else {
            setStats(res.data.stats[0].stat.name)
          }
          if(res.data.stats.length > 0){
            setStatsBase(res.data.stats.map(element => element.base_stat))
          }
          // Types
          if(res.data.types.length > 0){
            setTypes(res.data.types.map(element => element.type.name))
          } else {
            setTypes(res.data.types[0].type.name)
          }

        });
    }

    fetchData();
  }, [pokeId]);
  console.log(data, abilityVal, heldItems, moves, stats, types, "HEY");
  console.log(abilityVal);
  return (
    <>
    <div className='statsPage'>
      <div className="statsDiv">
        <div className='imgDiv'>
          <div>
            <p>Regular: </p>
            <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${data.name}.gif`} alt={`Regular: ${data.name}`} />
            <img src={`https://img.pokemondb.net/sprites/black-white/anim/back-normal/${data.name}.gif`} alt={`Back Regular: ${data.name}`} />
          </div>
          <div>
            <p>Shiny: </p>
            <img src={`https://img.pokemondb.net/sprites/black-white/anim/shiny/${data.name}.gif`} alt={`Shiny: ${data.name}`} />
            <img src={`https://img.pokemondb.net/sprites/black-white/anim/back-shiny/${data.name}.gif`} alt={`Back Shiny: ${data.name}`} />
          </div>
        </div>
        <div className='infoDiv'>
          <p>Id#: {data.id}</p>
          <p>Name: {capitalize(data.name)}</p>
          <p>Base XP: {data.base_experience}</p>
          <p>Height: {(data.height * 0.1).toFixed(1)}m</p>
          <p>Weight: {(data.weight * 0.1).toFixed(1)}kg</p>
        </div>
        <div className="typeItem">
          <div className="types">
            <p className='text'>Types: </p>
            {types.map(function(el, index){
              return <p className={el}>{capitalize(el)}</p>;
            })}
          </div>
          <div className="heldItems">
            <p className='text'>Held Items: </p>
            {heldItems.map(function(el, index){
              return <p>{capitalize(el)}</p>
            })}
          </div>
        </div>
      </div>

      <div className="stats">
        {stats.map(function(el,index){
          return (
            <div className={el}>
              <p className={(statsBase[index]/maxStats[index])*100} style={{width: `${((statsBase[index]/maxStats[index])*100)}%`}}>{capitalize(el)}: {statsBase[index]}</p>
            </div>
          );
        })}
      </div>
      <div className='moveAbility'>
        <div className="moves">
          <p className='text'>Moves: </p>
          {moves.map(function(el, index){
            while(index < 4)
              return <p>{capitalize(el)}</p>;
          })}
        </div>

        <div className="ability">
          <p className='text'>Abilities: </p>
          {abilityVal.map(function(el, index){
            return <p>{capitalize(el)}</p>;
          })}
        </div>
      </div>
    </div>
    </>
  );
}

export default withRouter(StatsPage);
