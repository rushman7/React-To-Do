import React, { Component } from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [
        {
          task: 'Do Laundry',
          id: Date.now(),
          completed: false
        }
      ],
    }
  }

  addToDo = e => {
    const task = {
      task: e.target.value,
      id: Date.now(),
      completed: false
    }
    this.setState({ todo: [...this.state.todo, task] })
    console.log(this.state.todo);
  }

  clearTodo = () => {
    this.setState({ todo: [] })
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <Todo todo={this.state.todo} addToDo={this.addToDo}  clearTodo={this.clearTodo}/>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
