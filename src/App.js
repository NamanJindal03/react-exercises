import React,{useReducer} from "react";
import {todoContext} from "./context/todoContext";
import todoReducer from "./context/todoReducer";
import FormTodo from "./component/FormTodo";
import DisplayTodo from "./component/DisplayTodo";

function App() {
  const [todos, todosDispatcher] =useReducer(todoReducer, []);
  return (
    <>
      <todoContext.Provider value={{todos,todosDispatcher}}>
        <DisplayTodo />
        <FormTodo/>
      </todoContext.Provider>
    </>
  );
}

export default App;
