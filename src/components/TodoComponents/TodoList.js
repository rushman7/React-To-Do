import React from 'react';

const TodoList = props => {
  return (
    <div onClick={() => props.setCompleted(props.todo.id)}>
      {
        props.todo.completed ? 
        <span style={{ textDecorationLine: 'line-through' }}>{props.todo.task}</span> : 
        <span>{props.todo.task}</span>
      }
    </div>
  )
}

export default TodoList;