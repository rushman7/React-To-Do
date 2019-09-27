import React, { Component } from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      todo: [],
      search: ''
    }
  }

  filterOnChange = (e) => {
    this.setState({ search: e.target.value })
    console.log(this.state.search)
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('todo');
      const todo = JSON.parse(json);

      if (todo) {
        this.setState(() => ({
          todo: todo
        }))
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todo.length !== this.state.todo.length) {
      const json = JSON.stringify(this.state.todo);
      localStorage.setItem('todo', json)
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
    let tempTodo = this.state.todo.filter(todo => !todo.completed)
    this.setState({ todo: tempTodo })
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
          search={this.state.search} 
          addToDo={this.addToDo}  
          handleChange={this.handleChange} 
          clearCompleted={this.clearCompleted}
          clearTodo={this.clearTodo}
          setCompleted={this.setCompleted}
          filterOnChange={this.filterOnChange}
        />
        <button onClick={this.clearTodo}>Clear All</button>
      </div>
    );
  }
}

export default App;
