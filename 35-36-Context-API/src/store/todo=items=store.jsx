import { createContext } from "react";

export const TodoItemsContext = createContext({
  TodoItem: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
