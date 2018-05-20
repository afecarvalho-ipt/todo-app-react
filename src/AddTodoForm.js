import React from "react";

export class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: ""
    };
  }

  handleSubmit(submitEvt) {
    submitEvt.preventDefault();

    this.props.onAddTodo(this.state.todoText);

    this.setState({ todoText: "" });
  }

  handleTodoChange(changeEvt) {
    let newText = changeEvt.target.value;

    this.setState({ todoText: newText });
  }

  render() {
    return (
      <div className="form-group">
        <form
          className="input-group"
          onSubmit={submitEvt => this.handleSubmit(submitEvt)}
        >
          <input
            className="form-control"
            type="text"
            value={this.state.todoText}
            onChange={changeEvt => this.handleTodoChange(changeEvt)}
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">
              Add todo
            </button>
          </span>
        </form>
      </div>
    );
  }
}
