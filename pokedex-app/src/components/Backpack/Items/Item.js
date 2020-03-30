import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import ItemStats from '../../ItemStats/ItemStats.js';

const BackpackItem = props => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <>
      <div className='card'>
          <p>Id: {props.items.pokeid}</p>
          <p>Move: {capitalize(props.items.name)}</p>
          <p>Cost: {props.items.costAmount}</p>
          <form >
          <button type='submit'> - </button>
          </form>
          <p>Count: {props.items.count}</p>
          <form >
          <button type='submit'> + </button>
          </form>
          <p>Total Cost: {props.items.count * props.items.costAmount}</p>
          <Link to={`../items/${props.items.pokeid}`}>
            <p>More info on this item?</p>
          </Link>
      </div>
      <Route exact path='../items/:id' component={ItemStats} />
    </>
  );
};

export default BackpackItem;
