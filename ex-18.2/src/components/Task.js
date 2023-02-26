import React from "react";

const Task = ({ todo, updateTask, deleteTask }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            updateTask(todo.id);
          }}
        />
        {todo.task}
        <button
          onClick={() => {
            deleteTask(todo.id);
          }}
        >
          Delete
        </button>
      </label>
    </div>
  );
};

export default Task;
