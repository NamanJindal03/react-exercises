import React, {useState} from 'react'

function App() {
    let[count, setCount] =useState(0);
    let[count2, setCount2] =useState(0);
    
    console.log('rerendered');
    function setCountManual2() {
        console.log(count);
        setCount(count+1);
    }


    const arrowExplanation = prevstate => console.log('here');

    function setCountManual() {
       
        // setCount(3); //this setCount did not update our value of count
        // setCount(count+5); //at the end they are incrementing on 0 itself
        

        setCount((prevState)=> {
            console.log(prevState)
            return prevState+1 
        })
        setCount((prevState) => {
            console.log(prevState)
            return prevState +1
        })
        setCount(count+1);
        setCount((prevState) => {
            console.log(prevState)
            return prevState +1
        })
        //setCount2((prevState) => prevState+1)
        // setCount2(count2+1);

        //console.log(count);
        //console.log('count2 ' + count2);
        
       
        //setCountManual2();
    }
    return (
      <>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <span>{count}</span>
          <span>{count2}</span>
        </div>
        <button onClick={()=> setCountManual()}>increase counter</button>

        {/* <button onClick={()=>{
          if(count>0){
            setCount(count -1)
          }
        }}>
          decrease counter
        </button>
        <button onClick={()=>{setCount(0)}}>Reset Counter</button> */}
      </>
    );
  }
  
  export default App;