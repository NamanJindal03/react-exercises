import React,{useState} from "react";
import MyContext from './context'

const Provider = (props) => {
    const [customState, setCustomState] = useState({
        name:'naman',
        studentId: '1212'
    });
    
    return (
        <MyContext.Provider value={{
            data: customState, 
            setNewStudentId: () => setCustomState({...customState, studentId:'4545'})
            }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default Provider