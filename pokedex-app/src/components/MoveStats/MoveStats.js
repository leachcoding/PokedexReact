import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";

const MoveStats = (props) => {
  const [moves, setMoves] = useState([]);
  const [types, setTypes] = useState([]);

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
        })
        .catch(err => {
          console.log(err, 'err');
        });
    };

    fetchData();
  }, [moveId]);

  console.log(moves);
  console.log(types);
  return (
    <>
      <div>
        <p>Move: {moves.name}</p>
        <p>Accuracy: {moves.accuracy}</p>
        <p>Power: {moves.power}</p>
        <p>PP: {moves.pp}</p>
        <div className='types'>
          <p className='text'>Type: </p>
          <p className={types.name}>{types.name}</p>
        </div>
      </div>
    </>
  );
}

export default withRouter(MoveStats);
