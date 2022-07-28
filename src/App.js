import React, {useState} from 'react'
import Child from './Child'
let count2 = 0;
function App() {
  let[count, setCount] =useState(0); 
  //const[name, setCount2] =useState('naman'); 
  function updateCount(cn){
    
    count2 = cn +1;
    console.log(count2);
  }
  // const abcd = () =>{
    
  // }
  console.log('def');
  function printSomething(vr){
    console.log(vr)
  }
  return (
    <>
    {console.log('abcd')}
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <span>{count}</span>
        <span>{count2}</span>
      </div>
      <button onClick={()=>count = count+1}>increase counter</button>
      {/* <Child /> */}
      <button onClick={()=> updateCount(count2)}>increase count without state</button>

      <button onClick={()=>{
        if(count>0){
          setCount(count -1)
        }
      }}>
        decrease counter
      </button>
      <button onClick={()=>{setCount(0)}}>Reset Counter</button>
      <Child printSomething={printSomething}/>
    </>
  );
}

export default App;
