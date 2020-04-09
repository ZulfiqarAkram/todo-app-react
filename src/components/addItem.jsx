import React, { Component } from "react";

class AddItem extends Component {
  state = {
    todoItems: [],
    newItem: ""
  };

  constructor() {
    super();
    this.handleNewItemOnChange = this.handleNewItemOnChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem = e => {
    e.preventDefault();
    console.log("handleAddItem", this.state.newItem);
    const todoItems = [...this.state.todoItems];
    todoItems.push(this.state.newItem);
    this.setState({ todoItems: todoItems });
    this.setState({ newItem: "" });
  };

  handleNewItemOnChange(e) {
    this.setState({ newItem: e.target.value });
  }

  render() {
    return (
      <div>
        <br />
        <form>
          <div class="form-row">
            <div class="form-group col-md-11">
              <label for="add-new-todo-item" class="sr-only">
                Add New Todo Item
              </label>
              <input
                type="text"
                class="form-control"
                id="addItem"
                placeholder="Add Todo"
                value={this.state.newItem}
                onChange={this.handleNewItemOnChange}
              />
            </div>
            <div class="form-group col-md-1">
              <button onClick={this.handleAddItem} class="btn btn-primary mb-2">
                Add
              </button>
            </div>
          </div>
        </form>
        <br />
        <ul class="list-group list-group-flush">
          {this.state.todoItems.map(t => (
            <li class="list-group-item" key={t}>
              {t}
              <button className="btn btn-danger btn-sm m-2 float-right">
                Delete
              </button>
              <button className="btn btn-info btn-sm m-2 float-right">
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AddItem;
