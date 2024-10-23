// /src/app/components/Todo/TodoApp.tsx
"use client";

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useTodoReducer } from '../../hooks/useTodoReducer';
import { Todo } from '../../types/todo';

interface TodoAppProps {
  initialTodos: Todo[];
}

const TodoApp: React.FC<TodoAppProps> = ({ initialTodos }) => {
  const { state, addTodo, toggleTodo, removeTodo } = useTodoReducer(initialTodos); 

  return (
    <div className='w-[100%] flex flex-col justify-between items-center my-4'>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={state.todos} toggleTodo={toggleTodo} removeTodo={removeTodo} /> 
    </div>
  );
};

export default TodoApp;
