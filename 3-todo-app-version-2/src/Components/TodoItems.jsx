import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ TodoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {TodoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
