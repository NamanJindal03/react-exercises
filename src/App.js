import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function App() {
  //define todostate
  const[todos, setTodos] = useState([])
  //deletetodo
  const addTodo = async (todo) =>{
    const updatedTodos = [...todos, todo]
    setTodos((prevState) => [...prevState, todo])
    //localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }
  const deleteTodo = async (id) =>{
    //filter 
    const updatedTodos = todos.filter((todo) => todo.id !==id )
    setTodos(updatedTodos)
    //localStorage.setItem('todos',JSON.stringify(updatedTodos))
  }
  
  //brining data from localStorage ->
  useEffect(()=>{
    const allTodos = localStorage.getItem('todos');
    if(allTodos){
      setTodos(JSON.parse(allTodos))
    }
    console.log(todos)
  }, [])

  useEffect(()=>{
    console.log('todos' , todos);
    //unrequired reseting of localstorage
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
  

  

  return (
    <>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <TodoForm addTodo={addTodo}/>
    </>
  );
}

export default App;
