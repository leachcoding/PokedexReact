import React from 'react';
import Navigation from './Navigation/NavBar.js';
import SearchForm from './Search/SearchBar.js';
import PokemonList from './PokemonList/PokemonList.js';
import StatsPage from './StatsPage/StatsPage.js';
import Generations from './Generations/Generations.js';
import Moves from './Moves/Moves.js';
import MoveStats from './MoveStats/MoveStats.js'
import Berries from './Berries/Berries.js';
import Abilities from './Abilities/Abilities.js';
import AbilityStats from './AbilityStats/AbilityStats.js';
import About from './About/About.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <SearchForm />
          <Switch>
            <Route exact path='/' render={()=> <PokemonList />}/>
            <Route path='/detail/:id' component={StatsPage} />
            <Route path='/generations/:id' component={Generations} />
            <Route exact path='/moves' component={Moves} />
            <Route path='/moves/:id' component={MoveStats} />
            <Route path='/berries' component={Berries} />
            <Route exact path='/abilities' component={Abilities} />
            <Route path='/abilities/:id' component={AbilityStats} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }


export default App;
