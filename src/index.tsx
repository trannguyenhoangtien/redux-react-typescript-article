import React from 'react';
import { render } from "react-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ArticleAction, ArticleState, DispatchType } from './store/type';
import { applyMiddleware, createStore, Store } from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
