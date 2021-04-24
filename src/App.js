import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {

  let [title,changeTitle] =useState(['남자 코트 추천','강남 우동 맛집','국힙 노래 추천']);

  let navContentStyle={color:'white', fontSize:'30px'};
  return (
    <div className="App">
      <div className="header-nav">
        <div style={navContentStyle}>개발 블로그 blog</div>
      </div>
      {/* <img src={logo}/> */}
      <div className="list">
        <h3>{title[0]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3>{title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3>{title[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
        
      </div>

    </div>
  );
}

export default App;
