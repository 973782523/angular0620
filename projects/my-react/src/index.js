import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {createRoot} from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// 添加的自定义标签
// class Mfe4Element extends HTMLElement {
//   connectedCallback() {
//     ReactDOM.render(<App/>, this);
//   }
// }
//
// customElements.define('react-element', Mfe4Element);

