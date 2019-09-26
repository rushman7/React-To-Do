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
    const newVal = e.target.value
    this.setState({ value: newVal })
  }

  addToDo = e => {
    e.preventDefault()
    let task = { task: this.state.value, id: Date.now(), completed: false }
    
    this.setState({ todo: [...this.state.todo, task] })
    console.log(this.state.todo);
  }

  setCompleted = id => {
    let tempTodo = this.state.todo.slice();
    tempTodo = tempTodo.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    })

    this.setState({ tempTodo })
  }

  clearCompleted = e => {
    e.preventDefault()
    let tempTodo = this.state.todo.filter(todo => todo.completed !== true)
    this.setState({ tempTodo })
  }

  clearTodo = () => {
    const clear = [];
    this.setState({ todo: clear })
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <Todo 
          todo={this.state.todo} 
          value={this.state.value}
          addToDo={this.addToDo}  
          handleChange={this.handleChange} 
          clearCompleted={this.clearCompleted}
          clearTodo={this.clearTodo}
        />
        <button onClick={this.clearTodo}>Clear All</button>
      </div>
    );
  }
}

export default App;
