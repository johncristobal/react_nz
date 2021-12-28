import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

const store = createStore((state = 0, action) => {  //reducer

    //action= {type: `tipo de accion, payload: any}
    switch (action.type) {
      case "inc":{
        return state + 1
      }
      case "dec":{
        return state - 1
      }
      case "set":{
        return action.payload
      }
    
      default:
        return state;
    }
})

console.log(store.getState())
store.dispatch({type:"lala"})
console.log(store.getState())
store.dispatch({type:"inc"})
console.log(store.getState())
store.dispatch({type:"dec"})
console.log(store.getState())
store.dispatch({type:"set", payload: 15})
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
