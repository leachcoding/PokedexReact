import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import Machine from './Machine.js';
import MachinesSearch from '../Search/MachinesSearch';

function Machines() {
  const [machines, setMachines] = useState([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/machine?offset=${pages}&limit=20/`)
        .then(res => {
          let machineValue = res.data.results;
          machineValue.map(machine => {
            let regexPat = /\/machine\/(\d+)\//;
            let id = machine.url.match(regexPat)[1];
            return(machine['id'] = id);
          })
          setMachines(machineValue);
          console.log(res.data.results);
          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }
    fetchData();
  },[pages]);

  console.log(machines);
  if(loading) return <p>I'm Loading! Please be patient</p>;
  return (
    <>
      <div className = 'paginationRow'>
        <button onClick={() => setPages(pages -100)}>Prev - 5</button>
        <button onClick={() => setPages(pages -20)}>Prev</button>
        <button onClick={() => setPages(pages + 20)}>Next</button>
        <button onClick={() => setPages(pages + 100)}>Next + 5</button>
      </div>
      <MachinesSearch />
      <div className='cards'>
        {machines.map(item => <Machine machines={item} key={item.id}/>)}
      </div>
      <div className = 'paginationRow'>
        <button onClick={() => setPages(pages -100)}>Prev - 5</button>
        <button onClick={() => setPages(pages -20)}>Prev</button>
        <button onClick={() => setPages(pages + 20)}>Next</button>
        <button onClick={() => setPages(pages + 100)}>Next + 5</button>
      </div>
    </>
  );
}


export default withRouter(Machines);
