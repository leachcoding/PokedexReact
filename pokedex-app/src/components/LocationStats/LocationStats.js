import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import {Link, Route} from 'react-router-dom';

const LocationStats = (props) => {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);

  const locationId = props.match.params.id;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/location/' + locationId)
        .then(res => {
          console.log(res.data);
          setLocation(res.data);

          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }

    fetchData();
  }, [locationId]);

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  if(loading) return <p>I'm Loading! Please be patient</p>;

  return (
    <>
      <div className='types'>
        <p className='text'>Id: {location.id}</p>
        <p className='text'>Name: {capitalize(location.name)}</p>
        <p className='text'>Region: {capitalize(location.region.name)}</p>
      </div>
    </>
  );
}

export default withRouter(LocationStats);
