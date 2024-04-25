import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleComplete } from '../../../redux/todoSlice';
import cls from '../Todo.module.scss';
import { TodoState } from '../../../redux/types';
import { TodoItem } from '../Item/TodoItem';
import { deletedTodosSelector } from '../../../redux/selectors';

export const DeletedTodo: FC = () => {
  const todos = useSelector(deletedTodosSelector);
  const dispatch = useDispatch();

  const handleToggleComplete = (id: string) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={cls.Todo}>
      <div className={cls.content}>
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
