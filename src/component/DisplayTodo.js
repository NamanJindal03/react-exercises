import React, { useContext } from "react";
import { todoContext } from "../context/todoContext";
import { DELETE_TODO } from "../context/action.type";

function DisplayTodo() {
  const { todos, todosDispatcher } = useContext(todoContext);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.todoString}</span>
          <button onClick={() => todosDispatcher({ type: DELETE_TODO, payload:todo.id })}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DisplayTodo;
