import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";

const MoveStats = (props) => {
  const [moves, setMoves] = useState([]);
  const [types, setTypes] = useState([]);
  const [text, setText] = useState([]);

  const moveId = props.match.params.id;

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
          setText(res.data.flavor_text_entries[21]);
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
  return (
    <>
      <div className='types'>
        <p className='text'>Move: {moves.name}</p>
        <p className='text'>Accuracy: {moves.accuracy}</p>
        <p className='text'>Power: {moves.power}</p>
        <p className='text'>PP: {moves.pp}</p>
        <p className='text'>Type: </p>
        <p className={types.name}>{types.name}</p>
        <p className='text'>Desc: {text.flavor_text}</p>
      </div>
    </>
  );
}

export default withRouter(MoveStats);
