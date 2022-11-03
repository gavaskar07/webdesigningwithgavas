import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Gavas_app from './Gavas_app';
import Gavas_class from './Gavas_class';
import Gavas_arrow from './Gavas_arrow';
import Gavas_array from './Gavas_array';
import Gavas_module from './Gavas_module';
import Gavas_event from './Gavas_event';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gavas_event />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
