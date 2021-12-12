import React from 'react';
import { Route, Link } from "react-router-dom";
import ItemStats from '../ItemStats/ItemStats.js';

const Item = props => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  return (
    <>
      <div className='card'>
        <Link to={`/items/${props.items.id}`}>
          <p>Id: {props.items.id}</p>
          <p>Move: {capitalize(props.items.name)}</p>
        </Link>
      </div>
      <Route exact path='items/:id' component={ItemStats} />
    </>
  );
};

export default Item;
