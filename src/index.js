import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Potato from "./Potato";
/** 2-1. 
 * 위의 코드는 틀렸음
 * react application은 하나의 component만을 rendering 함
 */ 

/** 2-2. 
 * 이미 App을 render하고 있기 때문에 다른 component는 여기에 추가 불가능
 */ 
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
