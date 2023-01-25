/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function Modal() {
  <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
}

function App() {
  let [title, setTitle] = useState(['학교 이미지와 실체', '부산소마고에 대하여', '아침운동이 X 같은 이유']);
  let [good, goodAdd] = useState(0);

  function like() {
    goodAdd(good+1);
    alert("좋아요를 눌렀습니다");
  }

  function titleChange() {
    let copyTitle = [...title];
    copyTitle[1] = 'ㅂㅅ소마고에 대하여';
    setTitle(copyTitle);
  }

  function sortTitle() {
    let copyTitle = [...title];
    copyTitle = copyTitle.sort();
    setTitle(copyTitle);
  }

  return (
    <div className="App">
      <div className="navBar">
        <h4>Blog</h4>
      </div>
      <div>
        <button className="btn" onClick={ titleChange }>change</button>
        <button className="btn" onClick={ sortTitle }>정렬하기</button>
      </div>

      <div className="list">
        <h4>{ title[0] } <button className="likeBtn" onClick={ like }>👍🏻</button> {good} </h4>
        <p>1월 23일 발행</p>
      </div>
  
      <div className="list">
        <h4>{ title[1] } <button className="likeBtn" onClick={ like }>👍🏻</button> {good}</h4>
        <p>1월 23일 발행</p>
      </div>

      <div className="list">
        <h4>{ title[2] } <button className="likeBtn" onClick={ like }>👍🏻</button> {good}</h4>
        <p>1월 23일 발행</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

export default App;
