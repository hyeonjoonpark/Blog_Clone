/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function Modal() {
  return (
    <div className='modalPage'>
      <p>제목<input className='inputModal' placeholder='제목을 입력해주세요' method='post'></input></p>
      <p>내용<textarea className='textareaModal' placeholder='내용을 입력해주세요' method='post'></textarea></p>
      <button type='submit' className='submitBtn'>업로드</button>
    </div>
  )
}

function CommentModal(){
  return (
    <div className='comment'>
      댓글 <input className="commentInput" method='post'></input> 
      <button type='submit' className='submitBtn'>댓글 업로드</button>
    </div>
  )
}

function App() {
  let [title, setTitle] = useState(['학교의 미친 계획', '집 가고 싶다 라는 말', '아침운동이 X 같은 이유', "맥북 왜 안 줌"]);
  let [like, setLike] = useState([0, 0, 0, 0]);
  let [hate, setHate] = useState([0, 0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [commentModal, setCommentModal] = useState(false);
  let month = 3;
  let day = 27;

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
          <button className='btn' onClick={ ()=>{setModal(!modal)} }>게시물 작성하기</button>
          <button className="btn" onClick={ sortTitle }>정렬하기</button>
        </div>
      </div>
      { modal === true ? <Modal /> : null }
    {title.map((title, i) => {
        return (
          <div className="list" key={i}>
            <h4>{ title }<button className="likeBtn" onClick={ () => {
              let likeCnt = [...like];
              likeCnt[i]++;
              setLike(likeCnt);
            } }>👍🏻</button> {like[i]}
              <button className="hateBtn" onClick={ () => {
                let hateCnt = [...hate];
                hateCnt[i]++;
                setHate(hateCnt);
              } }>👍🏻</button> {hate[i]}  
            </h4>
            <p>
              <a>{month}월 {day}일 발행</a>

              <button className='commentBtn' type='submit' method='post' onClick={ ()=>{
                setCommentModal(!commentModal)}
              }>댓글 작성하기</button>

            </p>
            { commentModal === true ? <CommentModal /> : null }
          </div>
        )
      })
    }
    </div>
  )
}


export default App;
