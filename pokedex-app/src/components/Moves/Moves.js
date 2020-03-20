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
          let moveValue = res.data.results;
          moveValue.map(move => {
            let regexPat = /\/move\/(\d+)\//;
            let id = move.url.match(regexPat)[1];
            return(move['id'] = id);
          })
          setMoves(moveValue);
          console.log(res.data.results);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }
    fetchData();
  },[]);

  console.log(moves);
  return (
    <>
      <div className='cards'>
        {moves.map(item => <Move moves={item} key={item.name}/>)}
      </div>
    </>
  );
}


export default withRouter(Moves);
