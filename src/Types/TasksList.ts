export type TasksListType = {
  tasks: { text: string; done: false }[];
  onDelete: (index: number) => void;
  onToggleDone: (index: string) => void;
};
