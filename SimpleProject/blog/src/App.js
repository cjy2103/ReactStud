import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title,changeTitle] = useState('State 이용해서 저장');
  let [food,changeFood] = useState(['치킨','피자','햄버거']);
  let [drink,changeDrink] = useState(['보리차','음료수','커피']);


  let setNav = {color : 'yellow', fontSize: '30px'}
  

  return (
    <div className="App">
        <div className="black-nav">
            <div style={ setNav }>개발 Blog</div>
        </div>
        <div className = 'list'>
         <h3> { drink[2] } </h3>  
         <p>9월 14일 발행</p>
         <hr/>
        </div>

        <div className = 'list'>
         <h3> { title } </h3>  
         <p>9월 14일 발행</p>
         <hr/>
        </div>

        <div className = 'list'>
         <h3> { food[0] } </h3>  
         <p>9월 14일 발행</p>
         <hr/>
        </div>
        
    </div>
  );
}

export default App;
