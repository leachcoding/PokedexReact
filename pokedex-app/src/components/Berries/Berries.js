import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import Berry from './Berry.js';
import BerriesSearch from '../Search/BerriesSearch';

function Berries() {
  const [berries, setBerries] = useState([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/berry?offset=${pages}&limit=20/`)
        .then(res => {
          let berryValue = res.data.results;
          berryValue.map(berry => {
            let regexPat = /\/berry\/(\d+)\//;
            let id = berry.url.match(regexPat)[1];
            return(berry['id'] = id);
          })
          setBerries(berryValue);
          console.log(res.data.results);
          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }
    fetchData();
  },[pages]);

  console.log(berries);
  if(loading) return <p>I'm Loading! Please be patient</p>;
  return (
    <>
      <div className = 'paginationRow'>
        <button onClick={() => setPages(pages -100)}>Prev - 5</button>
        <button onClick={() => setPages(pages -20)}>Prev</button>
        <button onClick={() => setPages(pages + 20)}>Next</button>
        <button onClick={() => setPages(pages + 100)}>Next + 5</button>
      </div>
      <BerriesSearch />
      <div className='cards'>
        {berries.map(item => <Berry berries={item} key={item.name}/>)}
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


export default withRouter(Berries);
