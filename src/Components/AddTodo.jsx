import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-5">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
