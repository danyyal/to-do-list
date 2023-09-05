import React, { useContext } from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.scss";
import TaskContext from "../../../Context/TaskContext";
import { Task } from "../../../Types/TaskItem";

const TasksList = ({}) => {
  const { tasks, filterTasks, deleteTask } = useContext(TaskContext);

  return (
    <>
      <span className="clear-completed">
        <div
          className="clear-completed-text"
          onClick={() => {
            const indexes: number[] = [];
            tasks.map((val: Task, index: number) => {
              if (val.done === true) {
                indexes.push(index);
              }
            });
            filterTasks(indexes);
          }}
        >
          Clear Completed
        </div>
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
