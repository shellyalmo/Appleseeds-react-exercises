import React from "react";
import Task from "./Task";

const TasksList = ({ todosArr, updateTask, deleteTask }) => {
  return (
    <div>
      {console.log(todosArr)}
      {todosArr.map((todo) => {
        return (
          <Task
            key={todo.id}
            todo={todo}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default TasksList;
