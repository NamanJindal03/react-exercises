import React, {useState} from 'react'
import { flushSync } from 'react-dom';

function App2() {
    const[count, setCount] = useState(0);
    function funcCall () {
        // setCount((prevState)=>{
        //     return prevState +1;
        // })
        // setCount((prevState)=>{
        //     return prevState +1;
        // })
        flushSync(()=> {
            setCount(count+1)
        })
        console.log(count)
        flushSync(()=> {
            setCount(count+1)
        })
    }
    console.log('here');
    return(
        <>
            <div>
                {count}  
            </div>
            <button onClick={funcCall}>click me</button>
        </>
    )
}

export default App2;
