import React, { useState } from 'react';

export default function(props) {
  const [email, setEmail] = useState(props.first + '@gmail.com');

  const handleEmailChange = e => setEmail(e.target.value);

  return (
    <div>
      <div className="row">
        <input value={email} onChange={handleEmailChange} />
      </div>
      <div className="row">
        <h2>
          {props.first} {props.last} ({email})
        </h2>
      </div>
    </div>
  );
}
