import React, { useState } from "react";
import { addTodo, todoClicked } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const todos = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    setInputData(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputData) {
      dispatch(addTodo(inputData));
      setInputData("");
    }
  };

  const handleTodoClicked = (index) => {
    dispatch(todoClicked(index));
  };

  return (
    <div className="App">
      <h3>Add Your Todo here!!!</h3>
      <br />
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="Add Items"
            value={inputData}
            style={{ borderRadius: 10, width: "50%" }}
            onChange={handleInput}
          />
        </div>
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
        <br />
        <br />
      </form>
      <ul className="list-group">
        {todos.map((todo, index) => {
          console.log(todo.status);
          return (
            <li
              key={index}
              onClick={() => handleTodoClicked(index)}
              className={[
                todo.status === 1 ? "list-group-item background-green" : "",
                todo.status === 2 ? "background-black" : "",
                "list-group-item list-group-item-action",
              ].join(" ")}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
