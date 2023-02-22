import { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import TasksList from "./components/TasksList";
import { createDB, readDB } from "./api/api.js";

function App() {
  const [todosArr, setTodosArr] = useState([]);
  const refTaskTitle = useRef();

  const createTask = () => {
    const newTaskName = refTaskTitle.current.value;
    const newTodosArr = [
      ...todosArr,
      { task: newTaskName, id: uuid(), complete: false },
    ];
    setTodosArr(newTodosArr);
  };

  const updateTask = (todoId) => {
    const updatedTodosArr = todosArr.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodosArr(updatedTodosArr);
  };

  const deleteTask = (id) => {
    setTodosArr((todosArr) => todosArr.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const savedTodos = readDB("todoList");
    if (savedTodos) {
      setTodosArr(savedTodos);
    }
  }, []);

  useEffect(() => {
    createDB("todoList", todosArr);
  }, [todosArr]);

  return (
    <div>
      <h1>React Todo App</h1>
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
