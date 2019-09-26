import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Todo = props => {
  const {todo, addToDo, clearTodo} = props.todo;
  return (
    <div>
      <TodoList />
      <TodoForm />
    </div>
  )
}

export default Todo;