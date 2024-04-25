import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TodoItem } from './TodoItem';
import { TodoStatusEnum } from '../../../redux/types';
import { ComponentProps } from 'react';

const todoMock = {
  id: '1',
  text: 'Test Todo',
  status: TodoStatusEnum.Todo,
};

const defaultProps = {
  todoItem: todoMock,
  handleDeleteTodo: () => {},
  handleToggleComplete: () => {},
};

const renderTodoItem = (props: Partial<ComponentProps<typeof TodoItem>> = {}) => {
  return render(<TodoItem {...defaultProps} {...props} />);
};

describe('TodoItem', () => {
  it('renders the todo text', () => {
    renderTodoItem();

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('renders the todo status', () => {
    renderTodoItem();

    expect(screen.getByText(TodoStatusEnum.Todo)).toBeInTheDocument();
  });

  it('calls handleToggleComplete when checkbox is clicked', () => {
    const handleToggleCompleteMock = jest.fn();

    renderTodoItem({ handleToggleComplete: handleToggleCompleteMock });

    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleToggleCompleteMock).toHaveBeenCalledWith(todoMock.id);
  });

  it('calls handleDeleteTodo when delete button is clicked', () => {
    const handleDeleteTodoMock = jest.fn();
    renderTodoItem({ handleDeleteTodo: handleDeleteTodoMock });

    fireEvent.click(screen.getByTestId('delete-button'));
    expect(handleDeleteTodoMock).toHaveBeenCalledWith(todoMock.id);
  });

  it('does not render delete button when status is deleted', () => {
    renderTodoItem({ todoItem: { ...todoMock, status: TodoStatusEnum.Deleted } });

    expect(screen.queryByTestId('delete-button')).not.toBeInTheDocument();
  });
});
