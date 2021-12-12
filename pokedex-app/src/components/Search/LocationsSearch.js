import React, {useState, useEffect} from 'react';
import LocationStats from '../LocationStats/LocationStats';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import './SearchBar.css';

//This is for the pokemonlist search. You can search by id or name to get the stats of the pokemon searched for
const LocationsSearch = (props) => {
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
      return props.history.push(`/locations/${query.toLowerCase()}`)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder='Search locations by name or id' value={query} onChange={handleChange}/>
        <button className='submitButton'>Search</button>
      </form>
      <Route exact path="locations/:id" component={LocationStats} />
    </>
  );
}


export default withRouter(LocationsSearch);
