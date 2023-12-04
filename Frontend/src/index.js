import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './common.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './_store/store';

import { Provider } from "react-redux";
//import { applyMiddleware, createStore } from "redux";
//import promiseMiddlerware from "redux-promise";
//import reduxThunk from "redux-thunk";
//import reducer from "./_reducers";

// const createStoreWidthMiddleware = applyMiddleware(
//   promiseMiddlerware,
//   reduxThunk
// )(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Provider store={createStoreWidthMiddleware(
        reducer,
        //개발자 도구를 사용하기 위한 설정
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
