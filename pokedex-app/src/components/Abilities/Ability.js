import React from 'react';
import {Route, Link} from 'react-router-dom';

const Ability = props => {
  return (
    <>
      <div className='card'>
        <p>Id: {props.abilities.id}</p>
        <p>Ability: {props.abilities.name}</p>
      </div>
    </>
  );
};

export default Ability;
