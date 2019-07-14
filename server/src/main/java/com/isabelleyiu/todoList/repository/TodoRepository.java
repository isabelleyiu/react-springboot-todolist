package com.isabelleyiu.todoList.repository;

import com.isabelleyiu.todoList.model.Todo;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends MongoRepository<Todo, String> {
  public Todo findBy_id(ObjectId _id);
}
