import React from "react";
import AddNewTask from "../Tasks/AddNewTask/AddNewTask";
import TasksList from "../Tasks/TasksList/TasksList";
import Header from "../Header/Header";
import "./ToDoList.scss";
const ToDoList = () => {
  return (
    <div className="to-do-list-container">
      <Header />
      <AddNewTask />
      <TasksList />
    </div>
  );
};

export default ToDoList;
