import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

/* props */
function CustomCard({apiData = ''}) { 
    
    const {id, title, price, image} = apiData;

  return (
    <Card >
        <CardBody>
            <img 
                src={image}
                alt="" 
                height="100px"
                width="150px"
                className='rounded-circle img-thumbnail'
            />
            <CardText>{title} </CardText>
        </CardBody>
    </Card>
  )
}

export default CustomCard