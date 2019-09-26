import React from 'react';

const TodoList = props => {
  return (
    <div>
      <span>{props.todo.task}</span>
    </div>
  )
}

export default TodoList;