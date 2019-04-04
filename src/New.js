import React, { useState, useEffect } from 'react';

export default function(props) {
  const email = useInput(props.first + '@gmail.com');
  const eid = useEid();
  const emailLastUpdated = useValueLastUpdated(email.value);

  return (
    <div>
      <div className="row">
        <input value={email.value} onChange={email.onChange} />
      </div>
      <div className="row">
        <div>
          <input placeholder="EID" value={eid.value} onChange={eid.onChange} />
          <br />
          {!eid.valid && (
            <p class="form-text alert-danger">Hey stop pressing 9!</p>
          )}
        </div>
      </div>
      <div className="row">
        <h2>
          {props.first} {props.last} ({email.value}) #{eid.value}
        </h2>
      </div>
      <div className="row">
        <div>
          <h3>Email Last Updated: {emailLastUpdated.toLocaleTimeString()}</h3>
        </div>
      </div>
    </div>
  );
}

function useValueLastUpdated(trackedProperty) {
  const [lastUpdated, setlastUpdated] = useState(new Date());

  useEffect(() => {
    setlastUpdated(new Date());
  }, [trackedProperty]);

  return lastUpdated;
}

// hook for EID plus validation
function useEid() {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);

  function onChange(e) {
    const { value } = e.target;

    if (value.includes('9')) {
      setValid(false);
    } else {
      setValid(true);
      setValue(value);
    }
  }

  return {
    value,
    valid,
    onChange
  };
}

// no validation version of above.  Very reusable.
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
}
