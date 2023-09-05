import React, { useContext } from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.scss";
import TaskContext from "../../../Context/TaskContext";
import { Task } from "../../../Types/TaskItem";

const TasksList = ({}) => {
  const { tasks, filterTasks, deleteTask } = useContext(TaskContext);

  return (
    <>
      <span
        onClick={() => {
          const filtered = tasks.filter(
            (val: Task) => val.done
          );
          const indexes = filtered.map(
            (val: Task, index: number) => index
          );
          filterTasks(indexes);
        }}
        className="clear-completed"
      >
        Clear Completed
      </span>
      <ul>
        {tasks.map((task: Task, index: number) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
            id={index.toLocaleString()}
          />
        ))}
      </ul>
    </>
  );
};
export default TasksList;
