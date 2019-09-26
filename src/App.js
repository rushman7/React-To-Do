import React, { Component } from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      todo: [
        {
          task: 'Do Laundry',
          id: Date.now(),
          completed: false
        }
      ],
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  addToDo = e => {
    e.preventDefault()
    let task = { task: this.state.value, id: Date.now(), completed: false }
    
    this.setState({ todo: [...this.state.todo, task] })
    console.log(this.state.todo);
  }

  clearCompleted = () => {
    
  }

  clearTodo = () => {
    this.setState({ todo: [] })
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <Todo 
          todo={this.state.todo} 
          value={this.state.value}
          addToDo={this.addToDo}  
          handleChange={this.handleChange} />
        <button onClick={this.clearTodo}>Clear All</button>
      </div>
    );
  }
}

export default App;
