import React, {useState, useRef} from 'react'

function FormC() {
    const [fName, setFName] = useState('abcdf');
    const [course, setCourse] = useState('mathematics');
    const [count, setCount] = useState(0);
    console.log('rerendered');
    const ref1 = useRef(null);

    const handleFirstName = (event) =>{
        setFName(event.target.value)
    }

    const handleCourse = (event) =>{
        setCourse(event.target.value)
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        if(event.target.value != 'naman'){
            //user error
            //ref2.current.value ='error here'
            return;
        }
        console.log(ref1.current)
    }
    console.log('here');
    return(  
        <>
            <form onSubmit={handleFormSubmit}>
                <label >First Name</label>
                <input type="text"  ref={ref1} onClick={()=> {ref1.current.value = 'aaaa' }}/>
                <select  value="science">
                    <option value="english" >English</option>
                    <option value="science">Science</option>
                    <option value="mathematics">Mathematics</option>
                </select>
                <button type="submit">Click Me</button>
            </form>
            <div>{count}</div>
            <button onClick={() => {setCount(prevState => prevState+1)}}>
                click me
            </button>
        </>    
    )
}
  
  export default FormC;


  /* 
    useRef -> reference 
    rerender -> never 
    direct dom
    object 
  
  */
 /* 
    var h1 = document.querySelector('h1')
    h1.innerText 
 */