import React, { Component } from 'react'

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isCompleted: false
    }
  }
  handleChange = e => {
    this.setState({
      title: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state)
  }
  render() {
    return (
      <div>
        <input className="ui input focus massive"
          type="text"
          placeholder="Create new todo"
          value={this.state.title}
          onChange={this.handleChange}
        >
        </input>
        <button
          className="ui button primary"
          onClick={this.handleSubmit}
        >Submit</button>
      </div>
    )
  }
}

export default TodoForm
