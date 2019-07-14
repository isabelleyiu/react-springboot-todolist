import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    this.fetchTodos();
  }
  fetchTodos = () => {
    fetch('api/todos/')
      .then(todos => todos.json())
      .then(todos => this.setState({
        todos
      }))
      .catch(e => console.log(e))
  }
  createTodo = newTodo => {
    fetch('api/todos/', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(newTodo => this.setState({
        todos: [...this.state.todos, newTodo]
      }))
      .catch(e => console.log(e))
  }
  deleteTodo = todoId => {
    fetch(`api/todos/${todoId}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(isDeleted => {
        if (isDeleted) {
          const todos = this.state.todos.filter(todo => todo._Id !== todoId);
          console.log(todos)
          this.setState({
            todos
          })
        }
      })
      .catch(e => console.log(e))
  }
  render() {
    return (
      <div className="ui container" >
        <h1>Todo List</h1>
        <TodoForm createTodo={this.createTodo} />
        <div className="ui ordered list divided">
          {this.state.todos.map(todo => (
            <TodoItem key={todo._Id} todo={todo} deleteTodo={() => this.deleteTodo(todo._Id)} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
