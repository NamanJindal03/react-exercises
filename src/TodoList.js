import React from "react";
import { FaCross } from "react-icons/fa";
import Axios from 'axios'

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <li key={todo.id} style={{display:'flex', justifyContent:'space-between'}}>
            {todo.todoString}
            <span onClick={() => deleteTodo(todo.id)}>
              <FaCross />
            </span>
          </li>
        );
      })}
    </div>
  );
}

export default TodoList;
