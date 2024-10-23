import { Todo } from '../../types/todo';
import { MdDeleteOutline } from "react-icons/md";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void; 
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul className='mt-6 w-[100%] flex flex-col justify-between gap-3 px-[10%]'>
      {todos.map((todo) => (
        <li className='flex flex-row justify-between' key={todo.id}>
          <label className='w-[60%] flex flex-row items-center' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
            className='mr-2'
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.title}
          </label>
          <div className='items-center'>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5' onClick={() => removeTodo(todo.id)}><MdDeleteOutline className='text-xl'/></button>
          </div>
           
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
