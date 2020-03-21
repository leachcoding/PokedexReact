import React from 'react';
import {Route, Link} from 'react-router-dom';
import AbilityStats from '../AbilityStats/AbilityStats.js';

const Ability = props => {
  return (
    <>
      <div className='card'>
        <Link to={`/abilities/${props.ability.id}`}>
        <p>Id: {props.ability.id}</p>
        <p>Ability: {props.ability.name}</p>
        </Link>
      </div>
      <Route exact path='abilities/:id' component={AbilityStats} />
    </>
  );
};

export default Ability;
