import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";

const AbilityStats = (props) => {
  const [ability, setAbility] = useState([]);
  const [text, setText] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  const abilityId = props.match.params.id;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/ability/' + abilityId)
        .then(res => {
          setAbility(res.data);

          //Text
          setText(res.data.flavor_text_entries[21]);
          //Pokemon
          setPokemon(res.data.pokemon)
        })
        .catch(err => {
          console.log(err, 'err');
        });

    };

    fetchData();
  }, [abilityId]);
  console.log(ability);
  console.log(pokemon);
  console.log(text);

  return(
    <>
      <div className='types'>
        <p className='text'>Ability: {ability.name}</p>
        <p className='text'>Effect: {text.flavor_text}</p>
        <p className='text'>Pokemon</p>
      </div>
    </>
  );
}

export default withRouter(AbilityStats);
