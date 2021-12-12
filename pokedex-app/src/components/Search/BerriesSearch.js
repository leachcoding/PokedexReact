import React, {useState, useEffect} from 'react';
import BerryStats from '../BerryStats/BerryStats';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import './SearchBar.css';

//This is for the pokemonlist search. You can search by id or name to get the stats of the pokemon searched for
const BerriesSearch= (props) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    if (!inputValue) return '';
  };
  const handleSubmit = event => {
    event.preventDefault();
    const value = query;
    setQuery('');
    if (value) {
      return props.history.push(`/berries/${query}`)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder='Search berries by name or id' value={query} onChange={handleChange}/>
        <button className='submitButton'>Search</button>
      </form>
      <Route exact path="berries/:id" component={BerryStats} />
    </>
  );
}


export default withRouter(BerriesSearch);
