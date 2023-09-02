export type TaskItemType = {
  task: { text: string; done: false };
  onDelete: () => void;
  id: string;
  onToggleDone: (index: string) => void;
};
