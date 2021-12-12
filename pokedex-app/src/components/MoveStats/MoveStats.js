import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import './MoveStats.css';

const MoveStats = (props) => {
  const [moves, setMoves] = useState([]);
  const [types, setTypes] = useState([]);
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(true);

  const moveId = props.match.params.id;

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/move/' + moveId)
        .then(res => {
          console.log(res.data, 'line 15 res.data moves');
          console.log(res.data.type)
          // Main Data
          setMoves(res.data);

          // Types
          setTypes(res.data.type);
          // Text
          setText(res.data.flavor_text_entries[21] || res.data.flavor_text_entries[2]);
          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    };

    fetchData();
  }, [moveId]);

  console.log(moves);
  console.log(types);
  console.log(text);
  if(loading) return <p>I'm Loading! Please be patient</p>;
  return (
    <>
      <div className='moves'>
        <div className='leftMoveContainer'>
          <p className='text'>Move: {capitalize(moves.name)}</p>
          <p className='text'>Type: </p>
          <p className={types.name}>{capitalize(types.name)}</p>
        </div>
        <div className='rightMoveContainer'>
          <p className='text'>Accuracy: {moves.accuracy}</p>
          <p className='text'>Power: {moves.power}</p>
          <p className='text'>PP: {moves.pp}</p>
          <p className='text'>Desc: {text.flavor_text}</p>
        </div>
      </div>
    </>
  );
}

export default withRouter(MoveStats);
