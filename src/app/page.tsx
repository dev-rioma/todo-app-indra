import { Todo } from './types/todo';
import TodoApp from './Components/Todo/TodoApp';


const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const todos = await res.json();
  return todos.slice(0, 7); 
};

export default async function Home() {
  const initialTodos = await fetchTodos(); 

  return (
    <div className='w-full flex flex-col gap-4 justify-between items-center py-4'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>To-Do List</h1>
      <TodoApp initialTodos={initialTodos} />
    </div>
  );
}
