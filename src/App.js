import React, { Component } from 'react';
import Old from './Old';
import New from './New';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export const AppContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);

    const initialPokemon = 'pikachu';

    this.state = {
      searchValue: initialPokemon,
      pokemon: initialPokemon
    };
  }

  handleSearch = () => {
    // fire off new pokemon to children
    this.setState({ pokemon: this.state.searchValue });
  }

  render() {
    const context = {
      username: 'srkirkland',
      token: 'abc123'
    };

    return (
      <main role="main" className="container">
        <AppContext.Provider value={context}>
          <div className="jumbotron">
            <input className="form-control" placeholder="pokemon" onChange={e => this.setState({ searchValue: e.target.value })} />
            <button className="alert alert-primary" onClick={this.handleSearch}>Search!</button>
          </div>
          <div className="jumbotron">
            <h1>Class Component without hooks</h1>
            <hr />
            <Old pokemon={this.state.pokemon} />
          </div>
          <div className="jumbotron">
            <h1>Functional Component with hooks</h1>
            <hr />
            <New pokemon={this.state.pokemon} />
          </div>
        </AppContext.Provider>
      </main>
    );
  }
}

export default App;
