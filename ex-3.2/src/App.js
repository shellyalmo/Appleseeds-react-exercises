import React from "react";
import { task1, task2, task3 } from "./Tasks";

function App() {
  return (
    <div>
      {task1()}
      {task2()}
      {task3()}
    </div>
  );
}

export default App;
