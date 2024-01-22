// importo i vari componenti
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './components/Search';
import Forecast from './components/Forecast';

function App() {

  //preparo lo stato della barra di ricerca (come stato iniziale è '')
  const [search, setSearch] = useState('');
  //funzione per gstire l'aggiornamento della ricerca
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
        {/* struttura bootstrap */}
        <Row>
          <Col xs={12} lg={4}>
            <div className='d-lg-flex justify-content-lg-between'>
                <div className='city'>

                  {/* passo la prop onSearch che accetta la funzione handleSearch*/}
                  <Search onSearch={handleSearch}></Search>
                  
                </div>
            </div>
          </Col>

          <Col xs={12} lg={8}>
            <div className='forecast'>

              {/* passo la prop search che accetta il valore di ricerca della barra*/}
              <Forecast search={search}></Forecast>
            </div>
          
          </Col>
        </Row>
    </>
  )
}

// esportazione
export default App
