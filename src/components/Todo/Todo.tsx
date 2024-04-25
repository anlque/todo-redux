import { FC, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete } from '../../redux/todoSlice';
import cls from './Todo.module.scss';
import { TodoState } from '../../redux/types';
import { TodoItem } from './Item/TodoItem';
import { allTodosSelector } from '../../redux/selectors';
import { AppDispatch } from '../../redux/store';

export const Todo: FC = () => {
  const [text, setText] = useState('');
  const todos = useSelector(allTodosSelector);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleToggleComplete = (id: string) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className={cls.Todo}>
      <div className={cls.content}>
        <div className={cls.createPanel}>
          <button onClick={handleAddTodo}>
            <span>+</span>
            Add task
          </button>
          <input
            placeholder="Task name"
            type="text"
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </div>

        <div className={cls.todosContainer}>
          {todos.map((todo: TodoState) => (
            <TodoItem
              key={todo.id}
              todoItem={todo}
              handleToggleComplete={handleToggleComplete}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
