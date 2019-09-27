import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Todo = props => {
  return (
    <div>
      {
        props.todo.length > 0 ?
        props.todo.map(item => 
          <TodoList 
            todo={item} 
            key={item.id} 
            setCompleted={props.setCompleted}
          />) :
        <p>Add something to your list!</p>
      }
      <input 
        type="text"
        placeholder="Search..."
        value={props.search}
        onChange={props.filterOnChange}
      />
      <TodoForm 
        addToDo={props.addToDo} 
        handleChange={props.handleChange}
        value={props.value}
        clearCompleted={props.clearCompleted}
      />
    </div>
  )
}

export default Todo;