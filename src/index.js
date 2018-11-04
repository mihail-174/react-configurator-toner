import React from 'react';
import ReactDOM from 'react-dom';
// import './scss/index.scss';
import './css/style-calculator.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fetch(`${process.env.PUBLIC_URL}/dataCalculator.json`)
  .then(function(response) {
    return response.json();
   })
  .then(function(data) {
    ReactDOM.render(<App data={data} />, document.getElementById('app-calc-toner'));
  })
  .catch( alert );

registerServiceWorker();
