import React, { Component } from 'react'
import moment from 'moment';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModeOn: false,
      selectedTodo: null
    }
  }
  handleChange = e => {
    this.setState({
      selectedTodo: e.target.value
    })
  }
  editTodo = (id, title) => {
    if(!this.state.editModeOn) {
      this.setState({
        editModeOn: true,
        selectedTodo: title
      })
    } else {
      this.props.updateTodo(id, this.state.selectedTodo);
      this.setState({
        editModeOn: false,
        selectedTodo: null
      })
    }
  }
  render() {
    const { todo, deleteTodo, toggleCompleted } = this.props;
    const time = moment(todo._id.time).fromNow();

    return (
      <div className="item">
        { this.state.editModeOn 
        ? <div className="ui form">
            <input 
            className="ui input focus massive"
            value={this.state.selectedTodo}
            onChange={this.handleChange}
            />
          </div>
        : <h3 className="content">{todo.title}</h3>
        }
        <h5>Created {time}</h5>
        <button
          className="ui button basic negative right floated content"
          onClick={ deleteTodo }
          >Delete
        </button>
        <button
          className="ui button basic right floated content"
          onClick={ () => this.editTodo(todo._Id, todo.title) }
          >{ this.state.editModeOn? "Save" : "Edit"}
        </button>
        <button
          className="ui button basic secondary right floated content"
          onClick={ toggleCompleted }
          >{ todo.isCompleted ? 'Move to "In Progress"' : 'Move to "Completed"' }
        </button>
      </div >
    )
  }
}
  
export default TodoItem
