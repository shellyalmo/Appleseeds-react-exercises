import { useState, useRef, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import TasksList from "./components/TasksList";
import { createDB, readDB } from "./api/api.js";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { task: action.payload, id: uuid(), complete: false }];
    case "UPDATE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "SET_TODOS":
      return action.payload;
    default:
      return state;
  }
};

function App() {
  // const [todosArr, setTodosArr] = useState([]);
  const [todosArr, dispatch] = useReducer(reducer, []);
  const refTaskTitle = useRef();

  const createTask = () => {
    const newTaskName = refTaskTitle.current.value;
    // const newTodosArr = [
    //   ...todosArr,
    //   { task: newTaskName, id: uuid(), complete: false },
    // ];
    // setTodosArr(newTodosArr);
    dispatch({ type: "ADD_TODO", payload: newTaskName });
    refTaskTitle.current.value = "";
  };

  const updateTask = (todoId) => {
    dispatch({ type: "UPDATE_TODO", payload: todoId });
    // const updatedTodosArr = todosArr.map((todo) => {
    //   if (todo.id === todoId) {
    //     return { ...todo, complete: !todo.complete };
    //   }
    //   return todo;
    // });
    // setTodosArr(updatedTodosArr);
  };

  const deleteTask = (id) => {
    // setTodosArr((todosArr) => todosArr.filter((todo) => todo.id !== id));
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  // useEffect(() => {
  //   const savedTodos = readDB("todoList");
  //   if (savedTodos) {
  //     setTodosArr(savedTodos);
  //   }
  // }, []);

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
