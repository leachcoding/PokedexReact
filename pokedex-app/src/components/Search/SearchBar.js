import React, {Component} from 'react';
import StatsPage from '../StatsPage/StatsPage';
import {Route} from 'react-router-dom';
import Filter from '../Filter/Filter.js';
import {withRouter} from 'react-router';
import './SearchBar.css';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      showFilters: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({ searchQuery: inputValue });

    if (!inputValue) return "";
  };
  handleSubmit = event => {
    const { searchQuery } = this.state;
    event.preventDefault();
    const value = this.state.searchQuery;
    this.setState({ searchQuery: "" });
    if (value) {
      return this.props.history.push(`/detail/${searchQuery}`);
    }
  };
  handleFilter = () => {
    this.setState({ showFilters: false });
  };

  render() {
    const { searchQuery, showFilters } = this.state;
    return (
      <>
      <form className='searchForm' onSubmit={this.handleSubmit}>
        <input placeholder='Search Pokemon by name or id' value={searchQuery} onChange={this.handleChange} className='inputField'/>
        <button className="submitButton">Search</button>
      </form>
      {this.props.location.pathname === "/" && (
          <button
            className="filterButton"
            onClick={() => {
              this.setState({ showFilters: !showFilters });
            }}
          >
            Filter
          </button>
        )}
      {showFilters && (
        <Filter showFilter={this.handleFilter} filter={this.props.filter} />
      )}
      <Route exact path="detail/:id" component={StatsPage} />
      </>
    );
  }
}

export default withRouter(SearchForm);
