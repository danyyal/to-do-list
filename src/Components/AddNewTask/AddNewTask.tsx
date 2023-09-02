import React from "react";
import { AddNewTaskProps } from "../../Types/AddNewTaskProps";

const AddNewTask = ({ newTask, addTask, setNewTask }: AddNewTaskProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button className="add-new-item" onClick={addTask}>
        Add Item
      </button>
    </div>
  );
};

export default AddNewTask;
