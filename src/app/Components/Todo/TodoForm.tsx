"use client"; 

import { useState } from 'react';
import { Todo } from '../../types/todo';

interface TodoFormProps {
  addTodo: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo: Todo = {
      userId: 1,
      id: Date.now(),
      title: newTodo,
      completed: false,
    };

    addTodo(todo);
    setNewTodo('');
  };

  return (
    <form className='w-full flex flex-row gap-4 py-4 px-[10%]' onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new task"
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
      />
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ' type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
