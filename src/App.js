import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Grab check from Scott',
        completed: false
      },
      {
        id: 2,
        title: 'Apply to a job',
        completed: false
      },
      {
        id: 3,
        title: 'Learn up more on tech skills',
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
