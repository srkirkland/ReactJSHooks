import React, { Component } from 'react';
import { AppContext } from './App';

export default class Old extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    const url = `https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}/`;

    fetch(url)
      .then(result => result.json())
      .then(data => this.setState({ data }));
  }

  componentDidUpdate(nextProps) {
      if (nextProps.pokemon !== this.props.pokemon) {
          const url = `https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}/`;
    
          fetch(url)
              .then(result => result.json())
              .then(data => this.setState({ data }));
      }
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div>
            <div className="alert">Welcome {context.username}</div>
            <h2>Information about {this.props.pokemon}</h2>
            <div className="row">
              {this.state.data.name} (height: {this.state.data.height}, weight:{' '}
              {this.state.data.weight})
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
