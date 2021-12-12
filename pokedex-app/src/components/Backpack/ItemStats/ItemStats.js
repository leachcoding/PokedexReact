import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import {Link, Route} from 'react-router-dom';

const BackpackItemStats = (props) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const itemId = props.match.params.id;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokedexreactbackend.herokuapp.com/api/items/items/' + itemId)
        .then(res => {
          console.log(res.data.results);
          setItem(res.data.results);

          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }

    fetchData();
  }, []);

  console.log(item);

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  if(loading) return <p>I'm Loading! Please be patient</p>;

  return (
    <>
      <div className='item'>
        <img src={item.img} alt={item.name} />
        <div className='textCol'>
          <p className='text'>Name: {capitalize(item.name)}</p>
          <p className='text'>Id: {item.pokeid}</p>
          <p className='text'>Cost: {item.costAmount}</p>
          <p className='text'>Count: {item.count}</p>
          <p className='text'>Total Cost: {item.count * item.costAmount}</p>
        </div>
      </div>
    </>
  );
}

export default withRouter(BackpackItemStats);
