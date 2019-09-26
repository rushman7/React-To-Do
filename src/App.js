import React, { Component } from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [
        {
          task: '',
          id: Date.now(),
          completed: false
        }
      ],
    }

    
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <Todo data={this.state}/>
      </div>
    );
  }
}

export default App;
