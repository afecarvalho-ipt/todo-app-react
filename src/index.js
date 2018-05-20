import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { render } from "react-dom";

import { AddTodoForm } from "./AddTodoForm";
import { TodoStats } from "./TodoStats";
import { TodoList } from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    };
  }

  handleAddToDo(todoText) {
    let newTodo = {
      complete: false,
      text: todoText
    };

    this.setState(state => {
      let newTodoList = [...state.todoList, newTodo];

      return {
        todoList: newTodoList
      };
    });
  }

  handleTodoToggle(toggledTodo) {
    let todoIndex = this.state.todoList.indexOf(toggledTodo);

    let newTodoList = [...this.state.todoList];

    newTodoList[todoIndex] = {
      ...toggledTodo,
      complete: !toggledTodo.complete
    };

    this.setState({ todoList: newTodoList });
  }

  handleTodoDelete(todoToDelete) {
    let todoListWithoutTodoToDelete = this.state.todoList.filter(
      todo => todo !== todoToDelete
    );

    this.setState({ todoList: todoListWithoutTodoToDelete });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Todo App</h1>
        <hr />
        <AddTodoForm onAddTodo={text => this.handleAddToDo(text)} />
        <TodoList
          todos={this.state.todoList}
          onTodoToggled={todo => this.handleTodoToggle(todo)}
          onTodoDeleted={todo => this.handleTodoDelete(todo)}
        />
        <TodoStats todos={this.state.todoList} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
