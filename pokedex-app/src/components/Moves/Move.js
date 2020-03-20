import React from 'react';
import { Route, Link } from "react-router-dom";
import MoveStats from '../MoveStats/MoveStats.js';

const Move = props => {
  return (
    <>
      <div className='card'>
        <Link to={`/moves/${props.moves.id}`}>
          <p>Id: {props.moves.id}</p>
          <p>Move: {props.moves.name}</p>
        </Link>
      </div>
      <Route exact path='moves/:id' component={MoveStats} />
    </>
  );
};

export default Move;
