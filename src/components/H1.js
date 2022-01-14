import React from 'react';
import './H1.scss';
import t1 from '../../src/t1.jpg'
import Bt from './Bt'


function H1 () {
  return (  
      <header className="App-header">
        <img src={t1} className="App-logo" alt="t1"/>
        <p>yoarajota</p>
        <Bt />
      </header>
  );
}

export default H1;
