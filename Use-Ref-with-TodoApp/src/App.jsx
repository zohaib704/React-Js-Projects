import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WellcomeMessage";
function App() {
  const [TodoItem, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added ${itemName} Date: ${itemDueDate}`);
    const newTodoItem = [...TodoItem, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItem);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = TodoItem.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {TodoItem.length === 0 && <WelcomeMessage></WelcomeMessage>}

      <TodoItems
        TodoItems={TodoItem}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
