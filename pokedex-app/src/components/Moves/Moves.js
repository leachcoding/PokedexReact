import React, {useState,useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router';
import Move from './Move.js';

function Moves() {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/move/')
        .then(res => {
          setMoves(res.data.results);
          console.log(res.data.results);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }
    fetchData();
  },[]);

  return (
    <>
      <div className='cards'>
        {moves.map(item => <Move moves={item} />)}
      </div>
    </>
  );
}


export default withRouter(Moves);
