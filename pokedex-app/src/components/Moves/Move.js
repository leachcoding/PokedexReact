import React from 'react';
import { Route, Link } from "react-router-dom";

const Move = props => {
  return (
    <>
      <div className='card'>
        <p>Id: {props.moves.id}</p>
      </div>
    </>
  );
};

export default Move;
