/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function Modal() {
  return (
    <div className='modalPage'>
      <p>제목<input className='inputModal' placeholder='제목을 입력해주세요'></input></p><br></br>
      <p>내용<textarea className='textareaModal' placeholder='제목을 입력해주세요'></textarea></p>
      <button type='submit' className='submitBtn'>업로드</button>
    </div>
  )
}

function App() {
  let [title, setTitle] = useState(['학교의 미친 계획', '"집 가고 싶다" 라는 말', '아침운동이 X 같은 이유']);
  let [like, setLike] = useState(0);
  let [hate, setHate] = useState(0);
  let [modal, setModal] = useState(false);

  function likeFn() {
    setLike(like+1);
    alert("좋아요를 눌렀습니다");
  }

  function hateFn() {
    setHate(hate+1);
    alert("싫어요를 눌렀습니다");
  }

  function sortTitle() {
    let copyTitle = [...title];
    copyTitle = copyTitle.sort();
    setTitle(copyTitle);
  }

  return (
    <div className="App">
      <div className="navBar">
        <h4>BSM Blog</h4>
        <div>
          <button className='btn'>BSM으로 시작하기</button>
          <button className='btn' onClick={ ()=>{ setModal(!modal)} }>ㅂㅅ소마고에 업로드 하기</button>
          <button className="btn" onClick={ sortTitle }>정렬하기</button>
        </div>

      </div>
      <div className="list">
        <h4>{ title[0] } <button className="likeBtn" onClick={ likeFn }>👍🏻</button> {like}
        <button className="hateBtn" onClick={ hateFn }>👍🏻</button> {hate}  
        </h4>
        <p>1월 23일 발행</p>
      </div>
  
      <div className="list">
        <h4>{ title[1] } <button className="likeBtn" onClick={ likeFn }>👍🏻</button> {like}
        <button className="hateBtn" onClick={ hateFn }>👍🏻</button> {hate} </h4>
        <p>1월 23일 발행</p>
      </div>

      <div className="list">
        <h4>{ title[2] } <button className="likeBtn" onClick={ likeFn }>👍🏻</button> {like}
        <button className="hateBtn" onClick={ hateFn }>👍🏻</button> {hate} </h4>
        <p>1월 23일 발행</p>
      </div>

      {modal === true ? <Modal /> : null}
    </div>
  );
}

export default App;
