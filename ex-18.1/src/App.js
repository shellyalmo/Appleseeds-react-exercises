import { useState, useRef, useEffect } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import { v4 as uuid } from "uuid";
import "./App.css";
import TasksList from "./components/TasksList";
import { createAPI, readAPI, updateAPI, deleteAPI } from "./api/api.js";

const router = createBrowserRouter([
  { path: "/", element: <Todos /> },
  { path: "/todos", element: <Todos /> },
  { path: "/about", element: <About /> },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is a Todo React App</h1>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

function Todos() {
  const [todosArr, setTodosArr] = useState([]);
  const refTaskTitle = useRef();

  const createTask = () => {
    const newTaskName = refTaskTitle.current.value;
    createAPI(newTaskName, false);
    const newTodosArr = [
      ...todosArr,
      { task: newTaskName, id: uuid(), complete: false },
    ];
    setTodosArr(newTodosArr);
  };

  const updateTask = (todoId) => {
    const updatedTodosArr = todosArr.map((todo) => {
      if (todo.id === todoId) {
        updateAPI(todoId, !todo.complete);
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodosArr(updatedTodosArr);
  };

  const deleteTask = (id) => {
    deleteAPI(id);
    setTodosArr((todosArr) => todosArr.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const updateState = async () => {
      const savedTodos = await readAPI();
      if (savedTodos) {
        setTodosArr(savedTodos);
      }
    };
    updateState();
  }, []);

  return (
    <div>
      <h1>React Todo App</h1>
      <Link to="/about">About Page</Link>

      <input ref={refTaskTitle} type="text" placeholder="What to do..." />
      <button onClick={createTask}>Add</button>
      <TasksList
        todosArr={todosArr}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
