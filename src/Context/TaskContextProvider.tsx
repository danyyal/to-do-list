import React, { useState, useEffect } from "react";
import TaskContext from "./TaskContext";
import { Task } from "../Types/TaskItem";

const TaskProvider = ({ children }: { children: any }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const localStorageKey = "tasks";

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks =
      JSON.parse(localStorage.getItem(localStorageKey) || "[]") || [];
    setTasks(storedTasks);
  }, []);

  // Define functions to manipulate tasks
  const updateTasks = (updatedTasks: Task[]) => {
    setTasks(updatedTasks);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedTasks));
  };

  const addTask = (text: string) => {
    if (!text.trim()) {
      alert("Please enter some text");
      return;
    }

    const newTask = { text, done: false };
    const updatedTasks = [...tasks, newTask];
    updateTasks(updatedTasks);
  };

  const filterTasks = (indexes: number[]) => {
    const filteredArray = tasks.filter(
      (value, index) => !indexes.includes(index)
    );
    updateTasks(filteredArray);
  };

  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    updateTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    updateTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, deleteTask, filterTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
