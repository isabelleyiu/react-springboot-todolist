import React from 'react'

const TodoItem = ({ todo, deleteTodo, toggleCompleted }) => {
  return (
    <div className="item">
      <h3 className="content">{todo.title}</h3>
      <h5>Last modified: {todo._id.timestamp}</h5>
      <button
        className="ui button basic negative right floated content"
        onClick={ deleteTodo }
        >Delete
      </button>
      <button
        className="ui button basic secondary right floated content"
        onClick={ toggleCompleted }
        >{ todo.isCompleted ? 'Move to "In Progress"' : 'Move to "Completed"' }
      </button>
    </div >
  )
}

export default TodoItem
