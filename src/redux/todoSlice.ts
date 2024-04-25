import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState, TodoStatusEnum } from './types';
import { v4 as uuidv4 } from 'uuid';

const initialState: TodoState[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoState = {
        id: uuidv4(),
        text: action.payload,
        status: TodoStatusEnum.Todo,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status =
          todo.status === TodoStatusEnum.Todo ? TodoStatusEnum.Done : TodoStatusEnum.Todo;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.status = TodoStatusEnum.Deleted;
    },
  },
});
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
