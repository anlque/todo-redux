import { memo, FC } from 'react';
import { TodoState, TodoStatusEnum } from '../../../redux/types';
import cls from './TodoItem.module.scss';
import { FiTrash } from 'react-icons/fi';

interface TodoItemProps {
  todoItem: TodoState;
  handleToggleComplete: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

export const TodoItem: FC<TodoItemProps> = memo(
  ({ todoItem, handleToggleComplete, handleDeleteTodo }) => {
    const checked = todoItem.status === TodoStatusEnum.Done;
    return (
      <div className={cls.TodoItem}>
        <span>{todoItem.text}</span>
        <div className={cls[todoItem.status]}>{todoItem.status}</div>
        {todoItem.status !== TodoStatusEnum.Deleted && (
          <div className={cls.actions}>
            <button
              data-testid="delete-button"
              className={cls.trashIcon}
              onClick={() => handleDeleteTodo(todoItem.id)}
            >
              <FiTrash size={12} color="#5d5c5c" />
            </button>
            <input
              checked={checked}
              type="checkbox"
              onChange={() => handleToggleComplete(todoItem.id)}
            />
          </div>
        )}
      </div>
    );
  }
);

TodoItem.displayName = 'TodoItem';
