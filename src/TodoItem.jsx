import Checkbox from './components/Checkbox';
import styles from './TodoItem.module.css';

export default function TodoItem({ todos, setTodos, todo }) {
  // 배열데이터 업데이트
  // todo로 각각 넘어온 id와 배열 전체요소의 id를 비교하여
  // 같은 경우 배열요소 업데이트
  function handleDone() {
    const nextTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...todo, done: !todo.done };
      } else return t;
    });
    setTodos(nextTodos);
  }

  function handleRemove() {
    const RemoveTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(RemoveTodos);
  }

  return (
    <div>
      <li className={`${styles.todo_item} ${todo.done ? styles.checked : ''}`}>
        <Checkbox onChange={handleDone}>{todo.text}</Checkbox>
        <button
          onClick={handleRemove}
          className={styles.remove_btn}
          type="button"
        >
          remove
        </button>
      </li>
    </div>
  );
}
