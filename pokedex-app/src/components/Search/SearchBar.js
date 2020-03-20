import React, {Component} from 'react';
import StatsPage from '../StatsPage/StatsPage';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import './SearchBar.css';

const SearchForm = (props) => {

  return (
    <>
      <form>
        <input placeholder='Search Pokemon by name or id' />
        <button className='submitButton'>Search</button>
      </form>
      <Route exact path="detail/:id" component={StatsPage} />
    </>
  );
}


export default withRouter(SearchForm);
