import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import Move from './Move.js';

function Moves() {
  const [moves, setMoves] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/move?offset=${pages}&limit=20/`)
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
  },[pages]);

  console.log(moves);
  return (
    <>
    <button onClick={() => setPages(pages -100)}>Prev - 5</button>
    <button onClick={() => setPages(pages -20)}>Prev</button>
    <button onClick={() => setPages(pages + 20)}>Next</button>
    <button onClick={() => setPages(pages + 100)}>Next + 5</button>
      <div className='cards'>
        {moves.map(item => <Move moves={item} key={item.name}/>)}
      </div>
      <button onClick={() => setPages(pages -100)}>Prev - 5</button>
      <button onClick={() => setPages(pages -20)}>Prev</button>
      <button onClick={() => setPages(pages + 20)}>Next</button>
      <button onClick={() => setPages(pages + 100)}>Next + 5</button>
    </>
  );
}


export default withRouter(Moves);
