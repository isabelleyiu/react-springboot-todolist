package com.isabelleyiu.todoList.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="todos")
public class Todo {
  @Id
  public ObjectId _id;
  public String title;
  public Boolean isCompleted;

  public Todo(ObjectId _id, String title, Boolean isCompleted) {
    this._id = _id;
    this.title = title;
    this.isCompleted = isCompleted;
  }

  public String get_Id() {
    return _id.toHexString();
  }

  public void set_Id(ObjectId _id) {
    this._id = _id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Boolean getIsCompleted() {
    return isCompleted;
  }

  public void setIsCompleted(Boolean isCompleted) {
    this.isCompleted = isCompleted;
  }
}
