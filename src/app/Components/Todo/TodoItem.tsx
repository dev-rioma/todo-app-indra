import { Todo } from '../../types/todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.title}
      <button onClick={() => toggleTodo(todo)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
    </li>
  );
};

export default TodoItem;
