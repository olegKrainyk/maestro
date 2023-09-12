import './App.css';
import { Route, Routes } from 'react-router-dom';
import Models from './components/Models/Models';
import Tenants from './components/Tenants/Tenants';
import GlobalStreams from './components/GlobalStreams/GlobalStreams';
import { AnimatePresence } from 'framer-motion';
import Login from './components/Login/Login';
import UpperBar from './components/UpperBar/UpperBar';
import SideBar from './components/SideBar/SideBar';


function App(props) {

  let currentPage;

  if(localStorage.getItem("active-page") === "tenants"){
    currentPage = <Tenants />
  } else if(localStorage.getItem("active-page") === "models"){
    currentPage = <Models />
  } else if(localStorage.getItem("active-page") === "global-streams"){
    currentPage = <GlobalStreams />
  } else if(localStorage.getItem("active-page") === "login"){
    currentPage = <Login />
  }

  return (
    <div className="App">
      <UpperBar />
      <SideBar setLoggedIn={props.setLoggedIn}/>
       
      <AnimatePresence mode='wait'>
      <Routes>
          <Route exact path="/" element={currentPage} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/models" element={<Models />} />
          <Route path="/global-streams" element={<GlobalStreams />} />
      </Routes>

      </AnimatePresence>
      
    </div>
  );
}

export default App;
