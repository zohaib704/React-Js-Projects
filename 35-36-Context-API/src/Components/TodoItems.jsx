import { useContext } from "react";
import { TodoItemsContext } from "../store/todo=items=store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ onDeleteClick }) => {
  const { TodoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {TodoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
