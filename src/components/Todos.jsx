import React, { Component } from "react";
import TodoList from "./TodoList";
import "./Todos.css";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.inputRef = React.createRef();
  }

  addTodo = () => {
    const name = this.inputRef.current.value;
    console.log(name);
    if (name === "") return;
    this.setState({
      todos: [
        {
          id: Math.floor(Math.random() * 6 * 3253),
          name: name,
          complete: false,
        },
        ...this.state.todos,
      ],
    });
    this.inputRef.current.value = "";
    console.log(this.state.todos);
  };

  toggleTodo = (id) => {
    const newTodos = [...this.state.todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    this.setState({
      todos: newTodos,
    });
  };

  handleDeleteTodo = (id) => {
    const newTodo = [...this.state.todos];
    const findTodo = newTodo.find((todo) => todo.id === id);
    const filterTodo = newTodo.filter((todo) => {
      return todo !== findTodo;
    });
    this.setState({
      todos: filterTodo,
    });
  };

  handleDeleteAll = () => {
    const newTodo = [...this.state.todos];
    const filterAllDone = newTodo.filter((todo) => !todo.complete);
    this.setState({
      todos: filterAllDone,
    });
  };

  handleKeypress = (e) => {
    if (e.keyCode === 13) {
      this.addTodo();
    }
  };

  render() {
    return (
      <div className="main-container">
        <h3 className="heading" style={{ textAlign: "center" }}>
          TODO
        </h3>
        <div className="top-container">
          <div className="input-container">
            <input onKeyDown={this.handleKeypress} ref={this.inputRef} placeholder="add a todo" type="text" />
          </div>
          <div className="btn-container">
            <button className="btn-add" onClick={this.addTodo}>
              ADD
            </button>
            <button
              className="btn-add delete-all"
              onClick={this.handleDeleteAll}
            >
              Delete Done
            </button>
          </div>
        </div>
        <div className="bottom-container">
          {this.state.todos.length === 0 ? (
            "PLEASE ADD A TODO"
          ) : (
            <TodoList
              todos={this.state.todos}
              toggleTodo={this.toggleTodo}
              handleDeleteTodo={this.handleDeleteTodo}
            />
          )}
        </div>
      </div>
    );
  }
}
