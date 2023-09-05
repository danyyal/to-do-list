import React, { useContext, useState } from "react";
import TaskContext from "../../../Context/TaskContext";

const AddNewTask = ({}) => {
  const [newTask, setNewTask] = useState("");
  const { addTask } = useContext(TaskContext);

  const addNewTask = () => {
    addTask(newTask);
    setNewTask("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addNewTask();
          }
        }}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button className="add-new-item" onClick={() => addNewTask()}>
        Add Item
      </button>
    </div>
  );
};

export default AddNewTask;
