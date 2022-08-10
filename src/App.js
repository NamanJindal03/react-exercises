import React, { useState } from "react";
import Counter from "./Counter";
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const [color, setColor] = useState('light');

  const changeThemeColor = () => {
    if(color === 'light'){
      setColor('dark')
      return
    }
    setColor('light')
  }
/* Light Mode, Dark Mode */
  return (
    <>
      <ThemeContext.Provider value={{theme: color}}>
        <Counter />
      </ThemeContext.Provider>
      <button onClick={()=> changeThemeColor()}>Change Theme</button>
    </>
  );
}

export default App;
