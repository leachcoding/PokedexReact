import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import {Link, Route} from 'react-router-dom';

const BerryStats = (props) => {
  const [berry, setBerry] = useState([]);
  const [loading, setLoading] = useState(true);

  const berryId = props.match.params.id;

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/berry/' + berryId)
        .then(res => {
          console.log(res.data);
          setBerry(res.data);

          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    };

    fetchData();
  }, [berryId]);

  console.log(berry);
  if(loading) return <p>I'm Loading! Please be patient</p>;
  return (
    <>
      <div className='types'>
        <p className='text'>Id: {berry.id}</p>
        <p className='text'>Name: {capitalize(berry.name)}</p>
        <p className='text'>Size: {berry.size}</p>
        <p className='text'>Smoothness: {berry.smoothness}</p>
        <p className='text'>Natural Gift Power: {berry.natural_gift_power}</p>
        <p className='text'>Soil Dryness: {berry.soil_dryness}</p>
        <p className='text'>Growth Time: {berry.growth_time}</p>
        <p className='text'>Max Harvest: {berry.max_harvest}</p>
      </div>
    </>
  );
};

export default withRouter(BerryStats);
