import React from 'react';
import Navigation from './Navigation/NavBar.js';
import Login from './Auth/Login.js';
import Register from './Auth/Register.js';
import PokemonList from './PokemonList/PokemonList.js';
import StatsPage from './StatsPage/StatsPage.js';
import Generations from './Generations/Generations.js';
import Moves from './Moves/Moves.js';
import MoveStats from './MoveStats/MoveStats.js'
import Types from './Types/Types.js';
import TypeStats from './TypeStats/TypeStats.js'
import Berries from './Berries/Berries.js';
import BerryStats from './BerryStats/BerryStats.js'
import Abilities from './Abilities/Abilities.js';
import AbilityStats from './AbilityStats/AbilityStats.js';
import About from './About/About.js';
import Locations from './Locations/Locations.js';
import LocationStats from './LocationStats/LocationStats.js';
import Machines from './Machines/Machines.js';
import MachineStats from './MachineStats/MachineStats.js';
import Items from './Items/Items.js';
import ItemStats from './ItemStats/ItemStats.js';
import Backpack from './Backpack/Backpack.js';
import BackpackItems from './Backpack/Items/Items.js';
import BackpackBerries from './Backpack/Berries/Berries.js';
import Footer from './Footer/Footer.js';
import PokeError from './PokeError/PokeError.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from './Auth/ProtectedRoute.js';

function App() {

    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route exact path='/' render={()=> <PokemonList />}/>
            <Route path='/detail/:id' component={StatsPage} />
            <Route path='/generations/:id' component={Generations} />
            <Route exact path='/moves' component={Moves} />
            <Route path='/moves/:id' component={MoveStats} />
            <Route exact path='/types' component={Types} />
            <Route path ='/types/:id' component={TypeStats} />
            <Route exact path='/berries' component={Berries} />
            <Route path='/berries/:id' component={BerryStats} />
            <Route exact path='/abilities' component={Abilities} />
            <Route path='/abilities/:id' component={AbilityStats} />
            <Route path='/about' component={About} />
            <Route exact path='/locations' component={Locations} />
            <Route path='/locations/:id' component={LocationStats} />
            <Route exact path='/machines' component={Machines} />
            <Route path='/machines/:id' component={MachineStats} />
            <Route exact path='/items' component={Items} />
            <Route path='/items/:id' component={ItemStats} />
            <ProtectedRoute exact path ='/backpack' component={Backpack} />
            <ProtectedRoute exact path='/backpack/items' component={BackpackItems} />
            <ProtectedRoute exact path='/backpack/berries' component={BackpackBerries} />
            <Route path="*" component={PokeError} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }


export default App;
