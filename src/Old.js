import React, { Component } from 'react';

// 2. Class with state
export default class Old extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.first + '@gmail.com'
    };
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="row">
          <input value={this.state.email} onChange={this.handleEmailChange} />
        </div>
        <div className="row">
          <h2>
            {this.props.first} {this.props.last} ({this.state.email})
          </h2>
        </div>
      </div>
    );
  }
}
