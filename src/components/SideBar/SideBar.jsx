import './SideBar.css';
import models_icon from '../../icons/models_icon.svg'
import global_streams_icon from '../../icons/global_streams_icon.svg'
import tenants_icon from '../../icons/tenants_icon.svg'
import logout_icon from '../../icons/logout_icon1.svg'
import SideBarIcon from './SideBarIcon/SideBarIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";


export default function SideBar(props){

  const [currentPage, setCurrentPage] = useState(localStorage.getItem("active-page"));

  const navigate = useNavigate();

  const handleClick = () => {
      localStorage.setItem("loggedin", false);
      props.setLoggedIn(false);
  }

  return (
    <div className="SideBar-Wrapper">
      <Link className={currentPage === "tenants" ? "navlink activelink" : "navlink" } to='/tenants' onClick={() => {setCurrentPage("tenants");localStorage.setItem("active-page", "tenants");}}><SideBarIcon icon_path={tenants_icon} /></Link>
      <Link className={currentPage === "models" ? "navlink activelink" : "navlink" } to='/models' onClick={() => {setCurrentPage("models");localStorage.setItem("active-page", "models");}}><SideBarIcon icon_path={models_icon} /></Link>
      <Link className={currentPage === "global-streams" ? "navlink activelink" : "navlink" } to='/global-streams' onClick={() => {setCurrentPage("global-streams");localStorage.setItem("active-page", "global-streams");}}><SideBarIcon icon_path={global_streams_icon} /></Link>
      <Link className="navlink" to='/login' onClick={handleClick}><SideBarIcon icon_path={logout_icon}></SideBarIcon></Link>
    </div>
  );
}