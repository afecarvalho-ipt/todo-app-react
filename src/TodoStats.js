import React from "react";

export class TodoStats extends React.Component {
  render() {
    let todos = this.props.todos;

    if (todos.length === 0) {
      return <div>You have no todos 😞 why not add one?</div>;
    }

    let completedTodos = todos.filter(todo => todo.complete).length;
    let incompleteTodos = todos.filter(todo => !todo.complete).length;

    return (
      <div>
        You have {todos.length} todos, {completedTodos} completed and{" "}
        {incompleteTodos} to be completed.
        {incompleteTodos === 0 ? " Good job! 💯" : ""}
      </div>
    );
  }
}
