import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from './App';

export default function(props) {
  const context = useContext(AppContext);

  const [data, setData] = useState({});

  useEffect(() => {
    if (props.pokemon) {
      const url = `https://pokeapi.co/api/v2/pokemon/${props.pokemon}/`;

      fetch(url)
        .then(result => result.json())
        .then(setData);
    }
  }, [props.pokemon]);

  return (
    <div>
      <div className="alert">Welcome {context.username}</div>
      <h2>Information about {props.pokemon}</h2>
      <div className="row">
        {data.name} (height: {data.height}, weight: {data.weight})
      </div>
      <div>
        {data.sprites && (
          <img alt={data.name} src={data.sprites.front_default} />
        )}
      </div>
    </div>
  );
}
