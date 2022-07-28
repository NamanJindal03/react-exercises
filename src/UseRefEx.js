import React, {useRef, createRef, useState} from 'react'

function UseRefEx() {

    const refUsingUseRef = useRef();
    const refUsingCreateRef = createRef();
    const [count, setCount] = useState(0);

    if(!refUsingCreateRef.current){
        console.log('useCreate ', refUsingCreateRef.current);
        refUsingCreateRef.current = count;
    }
    //
    if(!refUsingUseRef.current){
        console.log('useRef ', refUsingUseRef.current);
        refUsingUseRef.current = count;
    }

    
    return (
        <>
        <div>{refUsingUseRef.current}</div>

        <div>{refUsingCreateRef.current}</div>

        <div>{count}</div>
            <button onClick={() => {setCount(prevState => prevState+1)}}>
                click me
            </button>
        </>
    )
}

export default UseRefEx