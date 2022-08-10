import React, {useState, useContext} from 'react'
import { ThemeContext } from './context/ThemeContext';
import AppTheme from './Color';

function Counter() {
const [count, setCount] = useState(0);
const {theme} = useContext(ThemeContext);
const tempStyle = {backgroundColor : AppTheme[theme].backgroundColor}
console.log(tempStyle)
  return (
    <>
      <button 
        onClick={()=> setCount(prevState => prevState -1)}
        style={tempStyle}
      >
        reduce
      </button>
      <span>{count}</span>
      <button 
        onClick={()=> setCount(prevState => prevState +1)}
        style={tempStyle}
      >
        increase
      </button>
    </>
  )
}

export default Counter