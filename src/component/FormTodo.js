import React, { useContext, useReducer, useState } from "react";
import { ADD_TODO, HANDLE_ON_CHANGE_TODO_FORM, RESET_TODO_FORM } from "../context/action.type";
import todoReducer from "../context/todoReducer";
import { todoContext } from "../context/todoContext";
import todoFormReducer from "../context/todoFormReducer";

function FormTodo() {
  //const [todoString, setTodoString] = useState("");
  const [todoFormState, todoFormDispatcher] = useReducer(todoFormReducer, {
    todo: '',
    trial:'',
    img: {
      a1:'',
      a2: ''
    }
  });

  const { todosDispatcher } = useContext(todoContext);

  function handleSubmit(e) {
    e.preventDefault();
    let error = Object.keys(todoFormState).filter((field) => todoFormState[field] === '');
    if(error.length > 0){
      console.log(error)
      return;
    }
    const todo = {
      id: Date.now(),
      todoString: todoFormState.todo
    }
    todosDispatcher({
        type: ADD_TODO,
        payload: todo
    })
    todoFormDispatcher({
      type: RESET_TODO_FORM
    })
    /* if(todoString === ""){
        alert('add todo');
        return;
    }
    const todo = {
        id: Date.now(),
        todoString
    }
    
    setTodoString("") */
  }

  /* function onChangeReducer(){

  } */
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        id="todo"
        onChange={(e) => todoFormDispatcher(
          {
            type: HANDLE_ON_CHANGE_TODO_FORM,
            payload: {
              name: e.target.name,
              value: e.target.value
            }
          }
          )}
        value={todoFormState.todo}
      />
      <input
        type="text"
        name="trial"
        id="trial"
        onChange={(e) => todoFormDispatcher(
          {
            type: HANDLE_ON_CHANGE_TODO_FORM,
            payload: {
              name: e.target.name,
              value: e.target.value
            }
          }
          )}
        value={todoFormState.trial}
      />
      <button type="submit"> Submit</button>
    </form>
  );
}

export default FormTodo;

/* Authentication adn error handlign ->  */
