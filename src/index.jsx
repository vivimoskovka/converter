import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
    apiKey: "AIzaSyBKBugwUQvKPrSCjQnW7M1uAwqvh3gg5MY",
    authDomain: "pastry-converter.firebaseapp.com",
    databaseURL: "https://pastry-converter-default-rtdb.firebaseio.com",
    projectId: "pastry-converter",
    storageBucket: "pastry-converter.appspot.com",
    messagingSenderId: "32962123233",
    appId: "1:32962123233:web:968a5cc0b99b90a80d6ea0"
};

firebase.initializeApp(firebaseConfig);


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
