import React,{ useState } from 'react';
import Home from './components/Home';
import data from './components/data';
import styled from 'styled-components';
import './App.css';

function App() {
  const [people,setPeople]=useState(data);
  return (
    <div className="App">
      <Home data={data}/>

    </div>
  );
}

export default App;
