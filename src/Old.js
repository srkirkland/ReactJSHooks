import React, { Component } from 'react';

// 
export default class Old extends Component {
  render() {
    return (
      <div className="row">
        <h2>
          {this.props.first} {this.props.last}
        </h2>
      </div>
    );
  }
}
