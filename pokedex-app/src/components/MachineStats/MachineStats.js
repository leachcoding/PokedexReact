import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import {Link, Route} from 'react-router-dom';

const MachineStats = (props) => {
  const [loading, setLoading] = useState(true);
  const [machine, setMachine] = useState([]);

  const machineId = props.match.params.id;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/machine/' + machineId)
        .then(res => {
          console.log(res.data);
          setMachine(res.data);

          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }

    fetchData();
  }, [machineId]);

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  if(loading) return <p>I'm Loading! Please be patient</p>;

  return (
    <>
      <div className='types'>
        <p className='text'>Id: {machine.id}</p>
        <p className='text'>Name: {machine.item.name.toUpperCase()}</p>
        <p className='text'>Move: {capitalize(machine.move.name)}</p>
        <p className='text'>Version Group: {capitalize(machine.version_group.name)}</p>
      </div>
    </>
  );
}

export default withRouter(MachineStats);
