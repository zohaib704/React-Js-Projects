import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";
function App() {
  const TodoItem = [
    {
      name: "Buy Milk",
      dueDate: "23/11/2023",
    },
    {
      name: "Go to College",
      dueDate: "23/11/2023",
    },
    {
      name: "Like this Video",
      dueDate: "Right Now",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems TodoItems={TodoItem}></TodoItems>
    </center>
  );
}

export default App;
