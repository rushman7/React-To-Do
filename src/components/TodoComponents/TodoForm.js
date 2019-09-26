import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <form>
        <input 
          type="text" 
          placeholder="...todo"
          value={props.value}
          onChange={props.handleChange}
        />
        <button onClick={props.addToDo}>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm;