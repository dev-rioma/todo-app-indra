// TodoItem.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';
import { Todo } from '../../types/todo';

describe('TodoItem', () => {
  const mockToggleTodo = jest.fn();

  afterEach(() => {
    jest.clearAllMocks(); // Limpia los mocks después de cada prueba
  });

  const todo: Todo = {
    id: 1,
    title: 'Test Todo',
    completed: false,
  };

  test('renders the todo item with the correct title', () => {
    render(<TodoItem todo={todo} toggleTodo={mockToggleTodo} />);
    
    expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
  });

  test('displays "Complete" when the todo is not completed', () => {
    render(<TodoItem todo={todo} toggleTodo={mockToggleTodo} />);
    
    expect(screen.getByRole('button', { name: /Complete/i })).toBeInTheDocument();
  });

  test('displays "Undo" when the todo is completed', () => {
    const completedTodo: Todo = { ...todo, completed: true };
    render(<TodoItem todo={completedTodo} toggleTodo={mockToggleTodo} />);
    
    expect(screen.getByRole('button', { name: /Undo/i })).toBeInTheDocument();
  });

  test('calls toggleTodo when button is clicked', () => {
    render(<TodoItem todo={todo} toggleTodo={mockToggleTodo} />);
    
    fireEvent.click(screen.getByRole('button', { name: /Complete/i }));
    expect(mockToggleTodo).toHaveBeenCalledWith(todo);
  });

  test('applies line-through style when completed', () => {
    const completedTodo: Todo = { ...todo, completed: true };
    const { container } = render(<TodoItem todo={completedTodo} toggleTodo={mockToggleTodo} />);
    
    expect(container.querySelector('li')).toHaveStyle('text-decoration: line-through');
  });

  test('does not apply line-through style when not completed', () => {
    const { container } = render(<TodoItem todo={todo} toggleTodo={mockToggleTodo} />);
    
    expect(container.querySelector('li')).not.toHaveStyle('text-decoration: line-through');
  });
});
