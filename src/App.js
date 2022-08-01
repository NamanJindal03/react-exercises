import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Axios from 'axios'
import CustomCard from './CustomCard';

function App() {

  const [apiData, setApiData] = useState([]);

  const fetchApiDetails = async () =>{
    const {data} = await Axios.get('https://fakestoreapi.com/products');
    setApiData(prevState => [...prevState, data[0]])
  }

  useEffect(()=>{
    fetchApiDetails();
  }, [])

  return (
    <Container>
      <Row>
        <Col  md={4} className="offset-md-4" > 
          {/* custom component */}
          {apiData.length > 0 ? <CustomCard apiData={apiData[0]}/> : 'Loader' }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
