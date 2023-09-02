import React from "react";
import { TaskItemType } from "../../Types/TaskItem";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import "./TaskItem.scss";
const TaskItem = ({ task, onDelete, id, onToggleDone }: TaskItemType) => {
  return (
    <li id={id} className="task-item">
      <div className="task-container">
        <input
          type="checkbox"
          className="task-checkbox"
          onChange={() => onToggleDone(id)}
          checked={task?.done}
        />
        <span className={`task-text ${task.done ? "task-done" : ""}`}>
          {task?.text}
        </span>
        <ConfirmationModal message="Are you sure?" onConfirm={onDelete} />
      </div>
    </li>
  );
};

export default TaskItem;
