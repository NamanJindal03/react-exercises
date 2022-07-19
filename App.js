import React, { useState} from 'react'
import { Button, Card, CardBody, Container } from 'reactstrap';
import { FaBeer, FaDove } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import Icon from './Icon'


import "./App.css"

const itemArray = new Array(9).fill('empty')
function App() {
  const[isCross, setIsCross] = useState(false);
  const[winMessage, setWinMessage] = useState("");

  const changeItem = (itemNumber) =>{
    
    if(winMessage){
      return toast(winMessage, {type : " success"})
    }
    console.log(itemArray[itemNumber]);
    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross? "cross" : "circle";
      setIsCross(!isCross);
    }
    else{
      return toast("already filled", {type: "error"})
    }
    checkIsWinner();
  }

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill('empty',0,9);
  }
  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  };
  return (
    
      <Container className='p-5'>
        <ToastContainer position='bottom-center' />
        {winMessage
          ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-success text-uppercase text-content'>
                {winMessage}
              </h1>
              
              <Button color="success" onClick={reloadGame}>
                Reset 
              </Button>
            </div>
          )
          : (
            <h1 className='text-success text-uppercase text-content'>
                {isCross? "cross": "circle"} turns
            </h1>
          )}


        <div className='grid'>
          {
            itemArray.map((item, index) => {
              return (
                <Card color='warning' >
                  <CardBody className='box'> 
                    <Icon name={item} />
                  </CardBody>
                </Card>
              )
            })
          }
        </div>
      </Container>
  )
      
    
  
}

export default App;

//onClick={() => changeItem(index)