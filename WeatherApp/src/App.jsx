import Search from './components/Search';
import Forecast from './components/Forecast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React, { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
      <div className='d-flex justify-content-between'>
        <div className='city'>
          <Search onSearch={handleSearch}></Search> 
        </div>

        <div className='forecast'>
          <Forecast search={search}></Forecast>
        </div>
      </div>
    </>
  )
}

export default App
