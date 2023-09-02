import React, { useState, useEffect } from "react";
import AddNewTask from "./Components/AddNewTask/AddNewTask";
import TasksList from "./Components/TasksList/TasksList";
import ToggleButton from "./Components/ToggleButton/ToggleButton";
import Heading from "./Components/Heading/Heading";
import "./App.scss";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const localStorageKey = "tasks";

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setTasks(storedTasks);
  }, []); // Empty dependency array to run this effect only once

  const addTask = () => {
    if (!newTask.trim()) {
      alert("Please enter some text");
      return;
    }
    const updatedTasks = [...tasks, { text: newTask, done: false }];
    updateTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    updateTasks(updatedTasks);
  };

  const toggleTaskDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    updateTasks(updatedTasks);
  };

  // Use a separate function to update tasks and localStorage
  const updateTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedTasks));
    setNewTask(""); // Clear the input field
  };

  return (
    <div className="App">
      <ToggleButton />
      <Heading text={"Todo List"} />
      <AddNewTask newTask={newTask} addTask={addTask} setNewTask={setNewTask} />
      <TasksList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleDone={toggleTaskDone}
      />
    </div>
  );
}

export default App;
