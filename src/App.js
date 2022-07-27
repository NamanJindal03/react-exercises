import React, {useState} from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

function App() {
  /* lifting the state of child 1 to the common ancestor i.e App */
  const [name, setName] = useState('Parent');

  function getName(tempName) {
    console.log(tempName)
    setName(tempName);
  }
  return (
    <>
      <div>{name}</div>
      <Child1 getName={getName}/>
      {/* <Child2 count={count}/> */}
    </>
  );
}

export default App;
