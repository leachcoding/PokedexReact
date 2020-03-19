import React from 'react';
import { Route, Link } from "react-router-dom";

const Stats = (props) => {
  console.log(props);

  console.log(props.data);
  console.log(props.abilityVal);

  return (
    <>
    <div className="stats">
      <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${props.data.name}.gif`} alt={`Regular: ${props.data.name}`} />
      <img src={`https://img.pokemondb.net/sprites/black-white/anim/back-normal/${props.data.name}.gif`} alt={`Back Regular: ${props.data.name}`} />
      <img src={`https://img.pokemondb.net/sprites/black-white/anim/shiny/${props.data.name}.gif`} alt={`Shiny: ${props.data.name}`} />
      <img src={`https://img.pokemondb.net/sprites/black-white/anim/back-shiny/${props.data.name}.gif`} alt={`Back Shiny: ${props.data.name}`} />
      <p>Id#: {props.data.id}</p>
      <p>Name: {(props.data.name)}</p>
      <p>Base XP: {props.data.base_experience}</p>
      <p>{props.data.height * 0.1}m</p>
      <p>{props.data.weight * 0.1}kg</p>
      <p>{props.abilityVal.map(element => element)}</p>
    </div>
    </>
  )
}

export default Stats;
