import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import Item from './Item.js';
import ItemsSearch from '../Search/ItemsSearch.js';

function Items() {
  const [items, setItems] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/item?offset=${pages}&limit=20/`)
        .then(res => {
          let itemValue = res.data.results;
          itemValue.map(item => {
            let regexPat = /\/item\/(\d+)\//;
            let id = item.url.match(regexPat)[1];
            return(item['id'] = id);
          })
          setItems(itemValue);
          console.log(res.data.results);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }
    fetchData();
  },[pages]);

  console.log(items);
  return (
    <>
      <div className = 'paginationRow'>
        <button onClick={() => setPages(pages -100)}>Prev - 5</button>
        <button onClick={() => setPages(pages -20)}>Prev</button>
        <button onClick={() => setPages(pages + 20)}>Next</button>
        <button onClick={() => setPages(pages + 100)}>Next + 5</button>
      </div>
      <ItemsSearch />
      <div className='cards'>
        {items.map(item => <Item items={item} key={item.name}/>)}
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


export default withRouter(Items);
