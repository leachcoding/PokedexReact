import React from 'react';
import { Route, Link } from "react-router-dom";
import BerryStats from '../BerryStats/BerryStats.js';

const Berry = props => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  return (
    <>
      <div className='card'>
        <Link to={`/berries/${props.berries.id}`}>
          <p>Id: {props.berries.id}</p>
          <p>Move: {capitalize(props.berries.name)}</p>
        </Link>
      </div>
      <Route exact path='berries/:id' component={BerryStats} />
    </>
  );
};

export default Berry;
