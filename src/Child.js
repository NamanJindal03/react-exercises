import React, {useState} from "react";

const Child = (props) =>{
    const [count3, setCount3] = useState(5);

    function printHere () {
        props.printSomething('me')
    }
    return(
        <>
            <div>
                <span>{count3}</span>
                <button onClick={()=>{setCount3(count3+1)}}>Child Button</button>
            </div>
            <button onClick={printHere}>primt sometign</button>
        </>
    )
}

export default Child;

