import React from 'react'

function WrapperOne(props) {
  console.log(props.children)
  console.log(props.children[0].props.name)
  return (
    <>
      <div style={{margin:'20px'}}>{props.children}</div>
      <div>{props.children[0].props.name}</div>
    </>
  )
}

export default WrapperOne