import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="topNav">
          <Link to={'/'}><a>Home</a></Link>
          <a href="https://pokeapi.co/">API</a>
          <Link to={'/about'}><a>About</a></Link>
        </div>
        <div className="midNav">
          <Link to={'/generations/1'}><a>Gen 1</a></Link>
          <Link to={'/generations/2'}><a>Gen 2</a></Link>
          <Link to={'/generations/3'}><a>Gen 3</a></Link>
          <Link to={'/generations/4'}><a>Gen 4</a></Link>
          <Link to={'/generations/5'}><a>Gen 5</a></Link>
          <Link to={'/generations/6'}><a>Gen 6</a></Link>
          <Link to={'/generations/7'}><a>Gen 7</a></Link>
        </div>
        <div className='bottomNav'>
          <Link to={'/moves'}><a>Moves</a></Link>
          <Link to={'/abilities'}><a>Abilities</a></Link>
          <Link to={'/types'}><a>Types</a></Link>
          <Link to={'/berries'}><a>Berries</a></Link>
          <Link to={'/items'}><a>Items</a></Link>
          <Link to={'/machines'}><a>Machines</a></Link>
          <Link to={'/locations'}><a>Locations</a></Link>
        </div>
        <div className="blackBar"></div>
      </nav>
    );
  }
}

export default Navigation;
