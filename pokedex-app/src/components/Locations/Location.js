import React from 'react';
import { Route, Link } from "react-router-dom";
import LocationStats from '../LocationStats/LocationStats.js';

const Location = props => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  return (
    <>
      <div className='card'>
        <Link to={`/locations/${props.locations.id}`}>
          <p>Id: {props.locations.id}</p>
          <p>Move: {capitalize(props.locations.name)}</p>
        </Link>
      </div>
      <Route exact path='locations/:id' component={LocationStats} />
    </>
  );
};

export default Location;
