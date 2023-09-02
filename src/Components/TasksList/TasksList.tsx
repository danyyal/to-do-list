import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { TasksListType } from "../../Types/TasksList";

const TasksList = ({ tasks, onDelete, onToggleDone }: TasksListType) => {
  return (
    <ul className="task-item-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          id={index.toLocaleString()}
          onToggleDone={onToggleDone}
        />
      ))}
    </ul>
  );
};
export default TasksList;
