import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import {Link, Route} from 'react-router-dom';

const ItemStats = (props) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const itemId = props.match.params.id;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/item/' + itemId)
        .then(res => {
          console.log(res.data);
          setItem(res.data);

          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }

    fetchData();
  }, [itemId]);

  console.log(item);

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  if(loading) return <p>I'm Loading! Please be patient</p>;

  return (
    <>
      <div className='types'>
        <img src={item.sprites.default} alt={item.name} />
        <p className='text'>Name: {capitalize(item.name)}</p>
        <p className='text'>Id: {item.id}</p>
        <p className='text'>Cost: {item.cost}</p>
      </div>
    </>
  );
}

export default withRouter(ItemStats);
