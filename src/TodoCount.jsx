import styles from './TodoCount.module.css';

export default function TodoCount({ todos }) {
  // todos 배열요소중 todo.done이 true인 요소로 새로운 배열 리턴 후 갯수 구하기
  const doneCount = todos.filter((todo) => todo.done === true).length;

  return (
    <div className={styles.todo_count}>
      완료 : {doneCount} / 할 일 : {todos.length}
    </div>
  );
}
