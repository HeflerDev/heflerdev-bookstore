import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/index';
import 'csstack';
import './index.css';

store.dispatch({
  type: 'ADD_BOOK',
  payload: {
    id: '001',
    title: 'Moby Dick',
    category: 'Action',
    author: 'Herman Melville',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
