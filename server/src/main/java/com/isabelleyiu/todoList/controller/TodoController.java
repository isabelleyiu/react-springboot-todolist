package com.isabelleyiu.todoList.controller;

import com.isabelleyiu.todoList.model.Todo;
import com.isabelleyiu.todoList.repository.TodoRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

  @Autowired
  private TodoRepository todoRepository;

  @RequestMapping(value = "/", method = RequestMethod.GET)
  public List<Todo> getAllTodos() {
    return todoRepository.findAll();
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public Todo getTodoById(@PathVariable("id") ObjectId id) {
    return todoRepository.findBy_id(id);
  }

  @RequestMapping(value = "/", method = RequestMethod.POST)
  public Todo createTodo(@Valid @RequestBody Todo todo) {
    todo.set_Id(ObjectId.get());
    todoRepository.save(todo);
    return todo;
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void updateTodoById(@PathVariable("id") ObjectId id, @Valid @RequestBody Todo todo) {
    todo.set_Id(id);
    todoRepository.save(todo);
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public Boolean deleteTodoById(@PathVariable ObjectId id) {
    todoRepository.delete(todoRepository.findBy_id(id));
    return true;
  }
}