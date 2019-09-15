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
    this.props.createTodo(this.state);
    this.setState({
      title: "",
      isCompleted: false
    })
  }
  render() {
    return (
      <form className="ui form">
        <input 
          className="ui input focus massive"
          type="text"
          placeholder="What do you need to get done?"
          value={this.state.title}
          onChange={this.handleChange}
        >
        </input>
        <button
          style={{marginTop: "2%"}}
          className="ui button primary"
          onClick={this.handleSubmit}
          >Submit
        </button>
      </form>
    )
  }
}

export default TodoForm
