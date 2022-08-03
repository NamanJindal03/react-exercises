import React from 'react'
import ctx from './context'

function Child3() {
  return (
    <>
        <ctx.Consumer>
            {
                (context) => (
                    <>
                        <h3>somethign</h3>
                        <p>{context.data.name}</p>
                        <p>{context.data.studentId}</p>
                        <button onClick={()=> context.setNewStudentId()}>Change Student Id</button>
                    </>
                )
            }
            
        </ctx.Consumer>
        
    </>
  )
}

export default Child3