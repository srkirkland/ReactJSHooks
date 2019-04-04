import React from 'react';

export default function(props) {
  return (
    <div className="row">
      <h2>
        {props.first} {props.last}
      </h2>
    </div>
  );
}
