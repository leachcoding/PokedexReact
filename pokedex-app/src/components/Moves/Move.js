import React from 'react';
import { Route, Link } from "react-router-dom";
import MoveStats from '../MoveStats/MoveStats.js';

const Move = props => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  return (
    <>
      <div className='card'>
        <Link to={`/moves/${props.moves.id}`}>
          <p>Id: {props.moves.id}</p>
          <p>Move: {capitalize(props.moves.name)}</p>
        </Link>
      </div>
      <Route exact path='moves/:id' component={MoveStats} />
    </>
  );
};

export default Move;
