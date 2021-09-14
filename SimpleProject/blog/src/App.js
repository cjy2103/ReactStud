/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [foods,changeFoods] = useState(['피자','햄버거','치킨']);
  let [likeCount,likeCountChange] = useState(0);


  let setNav = {color : 'yellow', fontSize: '30px'}

  function foodChange(){
    var newFood = [...foods];
    newFood[2] = '스파게티';
    changeFoods( newFood );
  }

  function foodsSort(){
    var newFood = [...foods];
    newFood.sort();
    changeFoods( newFood )
  }


  return (
    <div className="App">
        <div className="black-nav">
            <div style={ setNav }>개발 Blog</div>
        </div>
        <button onClick = {foodChange}>글 변경</button>
        <button onClick = {foodsSort}>정렬</button>
        <div className = 'list'>
         <h3> { foods[2] } <span onClick={ () => { likeCountChange(likeCount+1) }}>👍</span> {likeCount} </h3> 
         <p>9월 14일 발행</p>
         <hr/>
        </div>

        <div className = 'list'>
         <h3> { foods[1] } </h3>  
         <p>9월 14일 발행</p>
         <hr/>
        </div>

        <div className = 'list'>
         <h3> { foods[0] } </h3>  
         <p>9월 14일 발행</p>
         <hr/>
        </div>
        
    </div>
  );
}

export default App;
