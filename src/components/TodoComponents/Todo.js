import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Todo = props => {
  return (
    <div>
      {props.todo.map(item => <TodoList todo={item} key={item.id}/>)}
      <TodoForm 
        addToDo={props.addToDo} 
        clearTodo={props.clearTodo} 
        handleChange={props.handleChange}
        value={props.value}
      />
    </div>
  )
}

export default Todo;