import { createSelector } from 'reselect';
import { RootState } from './store';

const todosSelector = (state: RootState) => state.todos;

export const allTodosSelector = createSelector(todosSelector, (todos) =>
  todos.filter((todo) => todo.status !== 'deleted')
);

export const deletedTodosSelector = createSelector(todosSelector, (todos) =>
  todos.filter((todo) => todo.status === 'deleted')
);
