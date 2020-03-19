import React, {Component} from 'react';
import Navigation from './Navigation/NavBar.js';
import SearchForm from './Search/SearchBar.js';
import PokemonList from './PokemonList/PokemonList.js';
import StatsPage from './StatsPage/StatsPage.js';
import Generations from './Generations/Generations.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typeFilters: []
    };
  }

  handleFilters = typeFilters => {
    if(!typeFilters) {
      this.setState({typeFilters: []});
    }
    this.setState({typeFilters:typeFilters});
  };


  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <SearchForm filter={this.handleFilters}/>
          <Switch>
            <Route exact path='/' render={()=> <PokemonList filter={this.handleFilters} />}/>
            <Route path='/detail/:id' component={StatsPage} />
            <Route path='/generations/:id' component={Generations} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
