import React from 'react';
import Navigation from './Navigation/NavBar.js';
import PokemonList from './PokemonList/PokemonList.js';
import StatsPage from './StatsPage/StatsPage.js';
import Generations from './Generations/Generations.js';
import Moves from './Moves/Moves.js';
import MoveStats from './MoveStats/MoveStats.js'
import Types from './Types/Types.js';
import TypeStats from './TypeStats/TypeStats.js'
import Berries from './Berries/Berries.js';
import Abilities from './Abilities/Abilities.js';
import AbilityStats from './AbilityStats/AbilityStats.js';
import About from './About/About.js';
import Locations from './Locations/Locations.js';
import Machines from './Machines/Machines.js';
import Items from './Items/Items.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path='/' render={()=> <PokemonList />}/>
            <Route path='/detail/:id' component={StatsPage} />
            <Route path='/generations/:id' component={Generations} />
            <Route exact path='/moves' component={Moves} />
            <Route path='/moves/:id' component={MoveStats} />
            <Route exact path='/types' component={Types} />
            <Route path ='/types/:id' component={TypeStats} />
            <Route path='/berries' component={Berries} />
            <Route exact path='/abilities' component={Abilities} />
            <Route path='/abilities/:id' component={AbilityStats} />
            <Route path='/about' component={About} />
            <Route path='/locations' component={Locations} />
            <Route path='/machines' component={Machines} />
            <Route path='/items' component={Items} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }


export default App;
