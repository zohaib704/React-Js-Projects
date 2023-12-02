import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ TodoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {TodoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
