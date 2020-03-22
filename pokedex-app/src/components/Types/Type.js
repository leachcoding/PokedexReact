import React from 'react';
import { Route, Link } from "react-router-dom";
import TypeStats from '../TypeStats/TypeStats.js';

const Type = props => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  return (
    <>
      <div className='card'>
        <Link to={`/types/${props.types.id}`}>
          <p>Id: {props.types.id}</p>
          <p>Type: {capitalize(props.types.name)}</p>
        </Link>
      </div>
      <Route exact path='types/:id' component={TypeStats} />
    </>
  );
};

export default Type;
