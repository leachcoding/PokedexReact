import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import BackpackBerry from './Berry.js';

function BackpackBerries() {
  const [berries, setBerries] = useState([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokedexreactbackend.herokuapp.com/api/berries/1/berries?offset=${pages}&limit=20/')
        .then(res => {
          setBerries(res.data);
          console.log(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }

    fetchData();
  }, [pages]);

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
      <div className='cards'>
        {berries.map(berry => <BackpackBerry berries={berry} key={berry.name} />)}
      </div>
      <div className = 'paginationRow'>
        <button onClick={() => setPages(pages -100)}>Prev - 5</button>
        <button onClick={() => setPages(pages -20)}>Prev</button>
        <button onClick={() => setPages(pages + 20)}>Next</button>
        <button onClick={() => setPages(pages + 100)}>Next + 5</button>
      </div>
    </>
  );

};

export default withRouter(BackpackBerries);
