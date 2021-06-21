import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App title={'title from index props'}/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
