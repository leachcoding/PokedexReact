import React, {useState, useEffect} from 'react';
import { Route, Link } from "react-router-dom";
import axios from 'axios';
import MachineStats from '../MachineStats/MachineStats.js';

const Machine = props => {

  const [data, setData] = useState('');
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/machine/${props.machines.id}`)
        .then(res => {
          setData(`${res.data.item.name.toUpperCase()} - ${capitalize(res.data.move.name)}`)
        })
        .catch(err => console.log(err, 'err'));
    }

    fetchData();
  }, [props.machines.id]);

  return (
    <>
      <div className='card'>
        <Link to={`/machines/${props.machines.id}`}>
          <p>Id: {props.machines.id}</p>
          <p>{data}</p>
        </Link>
      </div>
      <Route exact path='machines/:id' component={MachineStats} />
    </>
  );
};

export default Machine;
