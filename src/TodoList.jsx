import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
