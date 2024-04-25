export type TodoStatus = 'todo' | 'done' | 'deleted';

export const enum TodoStatusEnum {
  Todo = 'todo',
  Done = 'done',
  Deleted = 'deleted',
}
export interface TodoState {
  id: string;
  text: string;
  status: TodoStatus;
}
