import React, { Component } from 'react'
import './SingleTodo.css'

export default class Todo extends Component {

   handleTodoClick= ()=>{
    this.props.toggleTodo(this.props.todo.id)
  }

  deleteTodo = ()=>{
    if(this.props.todo.complete){
      this.props.handleDeleteTodo(this.props.todo.id)
    }else{
      alert("Can't Delete")
    }
   
  }
  render() {
    const { todo  } = this.props
    const complete = todo.complete
    return (
      <div className="single-todo">
      <div className="content">{todo.name}</div>
      <div className="btn-container1">
          { complete ? <div>Task Done</div> :<button  onClick={this.handleTodoClick} className="btn btn-done">Done</button>}
          
          <button onClick={ this.deleteTodo} className="btn btn-delete">Delete</button>
      </div>
  </div>
    )
  }
}
