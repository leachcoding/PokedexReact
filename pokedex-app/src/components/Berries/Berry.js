import React from 'react';
import {Route,Link} from 'react-router-dom';

const Berry = props => {
  return (
    <>
      <div className='card'>
        <p>Id: {props.berries.id}</p>
        <p>Berry: {props.berries.name}</p>
      </div>
    </>
  );
};

export default Berry;
