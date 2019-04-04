import React, { Component } from 'react';

// 3. Class with state and validation
export default class Old extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.first + '@gmail.com',
      eid: '',
      eidValid: true
    };
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleEIDChange = e => {
    // custom logic to validate e.  no 9's!
    const eid = e.target.value;

    if (eid.includes('9')) {
      this.setState({ eidValid: false });
    } else {
      this.setState({ eidValid: true, eid });
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <input value={this.state.email} onChange={this.handleEmailChange} />
        </div>
        <div className="row">
          <div>
            <input
              placeholder="EID"
              value={this.state.eid}
              onChange={this.handleEIDChange}
            />
            <br />
            { !this.state.eidValid && 
                <p class="form-text alert-danger">
                Hey stop pressing 9!
                </p>
            }
          </div>
        </div>
        <div className="row">
          <h2>
            {this.props.first} {this.props.last} ({this.state.email}) #
            {this.state.eid}
          </h2>
        </div>
      </div>
    );
  }
}
