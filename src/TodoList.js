import React from "react";

import { TodoListItem } from "./TodoListItem";

export class TodoList extends React.Component {
  render() {
    return (
      <div className="list-group">
        {this.props.todos.map(todo => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            onToggle={() => this.props.onTodoToggled(todo)}
            onDelete={() => this.props.onTodoDeleted(todo)}
          />
        ))}
      </div>
    );
  }
}
