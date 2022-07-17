import React, {useState} from 'react'

function App() {
  const[count, setCount] =useState(0); 
  //const[name, setCount2] =useState('naman'); 
  
  
  // function updateCount(cn){
    
  //   count2 = cn +1;
  //   console.log(count2);
  // }
  // const abcd = () =>{
    
  // }

  return (
    <>
    {console.log('abcd')}
      <div>
        <span>{count}</span>
      </div>
      <button onClick={()=>setCount(count+1)}>increase counter</button>
      {/* <button onClick={()=> updateCount(count2)}>increase counter no</button> */}
      <button onClick={()=>{
        if(count>0){
          setCount(count -1)
        }
      }}>
        decrease counter
      </button>
      <button onClick={()=>{setCount(0)}}>Reset Counter</button>
    </>
  );
}

export default App;

