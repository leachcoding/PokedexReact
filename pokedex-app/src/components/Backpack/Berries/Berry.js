import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import BerryStats from '../../BerryStats/BerryStats.js';

const BackpackBerry = props => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <>
      <div className='card'>
          <p>Id: {props.berries.pokeid}</p>
          <p>Move: {capitalize(props.berries.name)}</p>
          <p>Size: {props.berries.size}</p>
          <p>Smoothness: {props.berries.smoothness}</p>
          <p>Natural Gift Power: {props.berries.naturalGiftPower}</p>
          <p>Soil Dryness: {props.berries.soilDryness}</p>
          <p>Growth Time: {props.berries.growthTime}</p>
          <p>Max Harvest: {props.berries.MaxHarvest}</p>
          <form >
          <button type='submit'> - </button>
          </form>
          <p>Count: {props.berries.count}</p>
          <form >
          <button type='submit'> + </button>
          </form>
          <Link to={`../berries/${props.berries.pokeid}`}>
            <p>More info on this item?</p>
          </Link>
      </div>
      <Route exact path='../berries/:id' component={BerryStats} />
    </>
  );
};

export default BackpackBerry;
