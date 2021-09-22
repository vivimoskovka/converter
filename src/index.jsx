import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from "firebase";
import App from './App';

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
    <App />,
  document.getElementById('root')
);
