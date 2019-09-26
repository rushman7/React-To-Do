import React, { Component } from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: '',
      id: Date.now(),
      completed: false
    }
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <Todo />
      </div>
    );
  }
}

export default App;
