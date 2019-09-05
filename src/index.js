import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './STORE'
// import MyDrillName from './state-drills/MyDrillName'

ReactDOM.render(
  <App store={STORE} />,
  document.getElementById('root'),
);
