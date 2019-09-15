import React from 'react'
import moment from 'moment';

const TodoItem = ({ todo, deleteTodo, toggleCompleted, selectTodo }) => {
  const time = moment(todo._id.time).fromNow();
  return (
    <div className="item">
      <h3 className="content">{todo.title}</h3>
      <h5>Created {time}</h5>
      <button
        className="ui button basic negative right floated content"
        onClick={ deleteTodo }
        >Delete
      </button>
      <button
        className="ui button basic right floated content"
        onClick={ selectTodo }
        >Select
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
