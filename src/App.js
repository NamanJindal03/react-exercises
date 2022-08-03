import React, {useState} from "react";
import Child from "./Child";
import Child1 from "./Child1";
import MyContext from './context';
import Provider from "./provider";
function App() {
  const [bool, setBool] = useState(false)
  return (
    <>
      {/* <Child bool={bool} className='always'/>
      <button onClick={() => setBool(!bool)}>Change Bool</button> */}
      <Provider>
        
        <Child1  /> 
      </Provider>
    </>
  );
}

export default App;
