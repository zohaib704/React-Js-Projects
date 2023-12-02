import { useContext } from "react";
import { TodoItemsContext } from "../store/todo=items=store";
import styles from "./WellcomeMessage.module.css";
const WelcomeMessage = () => {
  const { TodoItem } = useContext(TodoItemsContext);
  return (
    TodoItem.length == 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};
export default WelcomeMessage;
