import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import App from './App'
import Login from './components/Login/Login'

function AppContainer() {
    const [loggedin, setLoggedIn] = useState(localStorage.getItem("loggedin"));

    return(
    <>
        <Routes >
            <Route path="/*" element={loggedin === "true" ? <App setLoggedIn={setLoggedIn}/> : <Login setLoggedIn={setLoggedIn}/>} />
        </Routes>
    </>
  );
}

export default AppContainer;