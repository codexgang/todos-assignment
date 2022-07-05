import React, { Component } from "react";
import SingleTodo from "./SingleTodo";
import "./TodoList.css"

export default class TodoList extends Component {
    
  render() {
    const { todos, toggleTodo, handleDeleteTodo } = this.props;
    return (
      <div className="list-container">
        {todos.map((todo) => {
          return (
            <SingleTodo
              key={todo.id}
              toggleTodo={toggleTodo}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
            />
          );
        })}
      </div>
    );
  }
}
