import React, { Component } from 'react';
import Old from './Old';
import New from './New';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    const name = {
      first: 'Peter',
      last: 'Parker'
    };

    return (
      <main role="main" className="container">
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
      </main>
    );
  }
}

export default App;
