import React, {useState} from 'react'

function Child1({getName}) {
    /* state defined in child 1 */
  return (
    <>
    {/* state usage in here  */}
        {/* <div>
            {count}
        </div> */}
        {/* <button onClick={()=>setCount((prevState)=> prevState+1)}>Increase Count</button> */}
        {/* <button onClick={()=>setCount(count+1)}>Increase Count</button> */}

        <button onClick={()=> getName('I am child')}>set child name</button>
    </>
  )
}

export default Child1