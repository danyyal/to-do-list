export type TaskItemType = {
  task: Task;
  onDelete: () => void;
  id: string;
};
export type Task = {
  text: string;
  done: boolean;
};
