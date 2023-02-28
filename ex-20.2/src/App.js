import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
      ],
    };
    // this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleTodo(index) {
    const todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        {todos.map((todo, index) => (
          <div
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.name}
            <button onClick={() => this.toggleTodo(index)}>X</button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
