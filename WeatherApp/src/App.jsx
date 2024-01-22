import Search from './components/Search';
import Forecast from './components/Forecast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  const [search, setSearch] = useState('');

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <div className='d-lg-flex justify-content-lg-between'>
              <div className='city'>
                <Search onSearch={handleSearch}></Search>
              </div>
              </div>
            </Col>

          <Col xs={12} lg={8}>
            <div className='forecast'>
              <Forecast search={search}></Forecast>
            </div>
          
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App
