import React from "react";

export class TodoListItem extends React.Component {
  render() {
    let todo = this.props.todo;

    return (
      <div
        className={`list-group-item ${
          todo.complete ? "list-group-item-success" : ""
        }`}
      >
        <h4 className="list-group-item-heading">{todo.text}</h4>
        <span className="pull-right">
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.onToggle}
          >
            {todo.complete ? (
              <span>✔️ Complete!</span>
            ) : (
              <span>Mark complete</span>
            )}
          </button>
        </span>

        <div className="clearfix" />

        <button
          type="button"
          onClick={this.props.onDelete}
          className="btn btn-xs btn-link"
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          <span className="close">&times;</span>
        </button>
      </div>
    );
  }
}
