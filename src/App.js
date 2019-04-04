import React, { Component } from 'react';
import Old from './Old';
import New from './New';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export const AppContext = React.createContext();

class App extends Component {
  render() {
    const context = {
      username: 'srkirkland',
      token: 'abc123'
    };

    const name = {
      first: 'Peter',
      last: 'Parker'
    };

    return (
      <main role="main" className="container">
        <AppContext.Provider value={context}>
          <div className="jumbotron">
            <h1>Class Component without hooks</h1>
            <hr />
            <Old first={name.first} last={name.last} />
          </div>
          <div className="jumbotron">
            <h1>Functional Component with hooks</h1>
            <hr />
            <New first={name.first} last={name.last} />
          </div>
        </AppContext.Provider>
      </main>
    );
  }
}

export default App;
