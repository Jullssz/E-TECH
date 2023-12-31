import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAoIBGpcwYHsm9K-1C_edgyIqxEASHvEI",
  authDomain: "e-tech-d3586.firebaseapp.com",
  projectId: "e-tech-d3586",
  storageBucket: "e-tech-d3586.appspot.com",
  messagingSenderId: "958040240547",
  appId: "1:958040240547:web:6acad916f339ecc8d92a16"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
