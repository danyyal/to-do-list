import React from "react";
import "./App.scss";
import ToDoList from "./Components/ToDoList/ToDoList";
import TaskProvider from "./Context/TaskContextProvider";
function App() {
  return (
    <TaskProvider>
      <div className="App">
        <ToDoList />
      </div>
    </TaskProvider>
  );
}

export default App;
