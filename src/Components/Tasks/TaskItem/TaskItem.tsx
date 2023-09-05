import React, { useContext, useState } from "react";
import { TaskItemType } from "../../../Types/TaskItem";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";
import { MdDeleteOutline } from "react-icons/md";

import "./TaskItem.scss";
import TaskContext from "../../../Context/TaskContext";
const TaskItem = ({ task, onDelete, id }: TaskItemType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { toggleTask } = useContext(TaskContext);
  return (
    <li id={id} className="task-item">
      <div className="task-container">
        <input
          type="checkbox"
          className="checkbox-input"
          id="myCheckbox"
          checked={task.done}
        />
        <label
          onClick={() => {
            toggleTask(id);
          }}
          className="checkbox-label"
          htmlFor="myCheckbox"
        ></label>
        <span className={`task-text ${task.done ? "task-done" : ""}`}>
          {task?.text}
        </span>
        <MdDeleteOutline
          className="delete-icon"
          size={24}
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <ConfirmationModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            message="Are you sure?"
            onConfirm={onDelete}
          />
        )}
      </div>
    </li>
  );
};

export default TaskItem;
