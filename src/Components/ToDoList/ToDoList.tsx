import React, { useState, useEffect, useContext } from "react";
import AddNewTask from "../Tasks/AddNewTask/AddNewTask";
import TasksList from "../Tasks/TasksList/TasksList";
import Header from "../Header/Header";

const ToDoList = () => {
  return (
    <div>
      <Header />
      <AddNewTask />
      <TasksList />
    </div>
  );
};

export default ToDoList;
