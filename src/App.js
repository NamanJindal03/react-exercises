import React, { useState, useReducer } from "react";
import { INCREAMENT_COUNT, DECREAMENT_COUNT, RESET_COUNT } from "./action.type";
import countReducer from './reducer'


function App() {
  const [state, dispatch] = useReducer(countReducer, {count: 0,count2: 1});

  return (
    <>
      <button onClick={() => dispatch({ type: INCREAMENT_COUNT, payload: {value:1} })}>
        increament
      </button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: DECREAMENT_COUNT })}>
        decreament
      </button>
      <button onClick={() => dispatch({ type: INCREAMENT_COUNT, payload: {value: 5} })}>
        Increament by 5
      </button>
      <button onClick={() => dispatch({ type: RESET_COUNT})}>
        Reset
      </button>
    </>
  );
}

export default App;
