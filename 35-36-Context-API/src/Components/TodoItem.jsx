import { useContext } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo=items=store";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <RiDeleteBin7Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
