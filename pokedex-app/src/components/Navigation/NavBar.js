import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="topNav">
          <Link to={'/'}>Home</Link>
          <a target="_blank" href="https://pokeapi.co/">API</a>
          <Link to={'/about'}>About</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>Signup</Link>
        </div>
        <div className="midNav">
          <Link to={'/generations/1'}>Gen 1</Link>
          <Link to={'/generations/2'}>Gen 2</Link>
          <Link to={'/generations/3'}>Gen 3</Link>
          <Link to={'/generations/4'}>Gen 4</Link>
          <Link to={'/generations/5'}>Gen 5</Link>
          <Link to={'/generations/6'}>Gen 6</Link>
          <Link to={'/generations/7'}>Gen 7</Link>
        </div>
        <div className='bottomNav'>
          <Link to={'/moves'}>Moves</Link>
          <Link to={'/abilities'}>Abilities</Link>
          <Link to={'/types'}>Types</Link>
          <Link to={'/berries'}>Berries</Link>
          <Link to={'/items'}>Items</Link>
          <Link to={'/machines'}>Machines</Link>
          <Link to={'/locations'}>Locations</Link>
        </div>
        <div className="blackBar">
          <Link to={'/backpack'}>Backpack:</Link>
          <Link to={'/backpack/items'}>Items</Link>
          <Link to={'/backpack/berries'}>Berries</Link>
          <Link to={'/backpack/machines'}>Machines</Link>
          <Link to={'/backpack/favorites'}>Favs: <img src="https://www.pikpng.com/pngl/m/137-1373971_8-bit-pixel-art-pokemon-clipart.png" alt="8 Bit Pixel Art Pokemon Clipart@pikpng.com"/></Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;
