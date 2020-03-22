import React from 'react';
import { Route, Link } from "react-router-dom";
import BerryStats from '../BerryStats/BerryStats.js';

const Berry = props => {
  return (
    <>
      <div className='card'>
        <Link to={`/berries/${props.berries.id}`}>
          <p>Id: {props.berries.id}</p>
          <p>Move: {props.berries.name}</p>
        </Link>
      </div>
      <Route exact path='berries/:id' component={BerryStats} />
    </>
  );
};

export default Berry;
