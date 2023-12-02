import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WellcomeMessage";
import { TodoItemsContext } from "./store/todo=items=store";
function App() {
  const [TodoItem, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added ${itemName} Date: ${itemDueDate}`);
    const newTodoItem = [...TodoItem, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItem);
  };
  const deleteItem = (todoItemName) => {
    const newTodoItem = TodoItem.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        TodoItem,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>

        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
