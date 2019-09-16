import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      selectedTodo: null
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
  createTodo =  newTodo => {
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
          this.setState({
            todos
          })
        }
      })
      .catch(e => console.log(e))
  }
  toggleCompleted = (todoId) => {
    const updatedTodo = this.state.todos.filter(todo => todo._Id === todoId)[0];
    updatedTodo.isCompleted = !updatedTodo.isCompleted;

    fetch(`api/todos/${todoId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(updatedTodo => {
        const todos = this.state.todos.filter(todo => todo._Id !== todoId);
        this.setState({
          todos: [...todos, updatedTodo]
        })
      })
      .catch(e => console.log(e))
  }
  updateTodo = (todoId, title) => {
    console.log(todoId, title)
    const updatedTodo = this.state.todos.filter(todo => todo._Id === todoId)[0];
    updatedTodo.title = title;

    fetch(`api/todos/${todoId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(updatedTodo => {
        const todos = this.state.todos.filter(todo => todo._Id !== todoId);
        this.setState({
          todos: [...todos, updatedTodo]
        })
      })
      .catch(e => console.log(e)).catch(e => console.log(e))
  }
  render() {
    return (
      <div className="ui container" >
        <h1 style={{marginTop: "2%"}} className="ui center aligned header">Todo List</h1>
        <TodoForm createTodo={this.createTodo} />
        {this.state.selectedTodo && <p>You have selected: {this.state.selectedTodo.title}</p>}
        <h2 style={{color: "#2185d0"}}>In Progress Tasks</h2>
        <div className="ui ordered list divided">
          {this.state.todos.map(todo => {
            if(!todo.isCompleted) {
              return <TodoItem 
                key={todo._Id} 
                todo={todo} 
                deleteTodo={() => this.deleteTodo(todo._Id)}
                toggleCompleted={() => this.toggleCompleted(todo._Id)}
                updateTodo={this.updateTodo}
              />
            }
          })}
        </div>  

        <h2 style={{color: "#2185d0"}}>Completed Tasks</h2>
        <div className="ui ordered list divided">
          {this.state.todos.map(todo => {
            if(todo.isCompleted) {
              return <TodoItem 
                key={todo._Id} 
                todo={todo} 
                deleteTodo={() => this.deleteTodo(todo._Id)}
                toggleCompleted={() => this.toggleCompleted(todo._Id)}
                updateTodo={this.updateTodo}
              />
            }
          })}
        </div>
      </div>
    );
  }
}

export default App;
