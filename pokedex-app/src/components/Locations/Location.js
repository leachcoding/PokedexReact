import React from 'react';
import { Route, Link } from "react-router-dom";
import LocationStats from '../LocationStats/LocationStats.js';

const Location = props => {
  return (
    <>
      <div className='card'>
        <Link to={`/locations/${props.locations.id}`}>
          <p>Id: {props.locations.id}</p>
          <p>Move: {props.locations.name}</p>
        </Link>
      </div>
      <Route exact path='locations/:id' component={LocationStats} />
    </>
  );
};

export default Location;
