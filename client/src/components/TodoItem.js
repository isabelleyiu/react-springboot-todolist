import React from 'react'

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="item">
      <h3 className="content">{todo.title}</h3>
      <h5>{todo.isCompleted ? 'DONE' : 'In Progress'}</h5>
      <button
        className="ui button primary right floated content"
        onClick={deleteTodo}
      >Delete</button>
    </div >
  )
}

export default TodoItem
