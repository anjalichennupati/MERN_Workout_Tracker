import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import { AuthContextProvider } from './context/AuthContext';
import { TAuthContextProvider } from './context/TAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <TAuthContextProvider>
    <WorkoutsContextProvider>
     <App />
    </WorkoutsContextProvider>
    </TAuthContextProvider>
    </AuthContextProvider>
   
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

