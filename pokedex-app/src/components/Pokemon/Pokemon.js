import React, {useState} from 'react';
import { Route, Link } from "react-router-dom";
import './Pokemon.css';
import StatsPage from '../StatsPage/StatsPage.js';

const Pokemon = props => {

  const[id, setId] = useState(props.data.id);

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  let idVal = '';

  if(props.data.id < 10) {
    idVal = 'Id#: 00' + id.toString();
  } else if(props.data.id < 100) {
    idVal = 'Id#: 0' + id.toString();
  } else {
    idVal = 'Id#: ' + id.toString();
  }

  // console.log(idVal);

  return (
    <>
    <div className="card">
      <Link to={`/detail/${props.data.id}`}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`} alt="pokemon" />
      <p>{idVal}</p>
      <p>Name: {capitalize(props.data.name)}</p>
      </Link>
    </div>
    <Route exact path='detail/:id' component={StatsPage} />
    </>
  );
};

export default Pokemon;
