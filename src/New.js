import React, { useState } from 'react';

export default function(props) {
  const [email, setEmail] = useState(props.first + '@gmail.com');
  const [eid, setEid] = useState('');
  const [eidValid, setEidValid] = useState(true);

  const handleEmailChange = e => setEmail(e.target.value);
  const handleEIDChange = e => {
    const eid = e.target.value;

    if (eid.includes('9')) {
      setEidValid(false);
    } else {
      setEidValid(true)
      setEid(eid);
    }
  }

  return (
    <div>
      <div className="row">
        <input value={email} onChange={handleEmailChange} />
      </div>
      <div className="row">
        <div>
          <input
            placeholder="EID"
            value={eid}
            onChange={handleEIDChange}
          />
          <br />
          {!eidValid &&
            <p class="form-text alert-danger">
              Hey stop pressing 9!
                </p>
          }
        </div>
      </div>
      <div className="row">
        <h2>
          {props.first} {props.last} ({email}) #{eid}
        </h2>
      </div>
    </div>
  );
}
