import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  let post = '경남 우동 맛집';

  return (
    <div className="App">
      <div className="navBar">
        <h4>Blog</h4>
      </div>
      <div className="list">
        <h4>{ post }</h4>
        <p>1월 23일 발행</p>
      </div>
    </div>
  );
}

export default App;
