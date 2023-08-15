import './UpperBar.css';
import logo from '../../icons/ceailogo.svg'
import UserLoggedIn from './UserLoggedIn/UserLoggedIn';
import { motion } from "framer-motion";
import { useState } from 'react';

export default function UpperBar(){

  const [logoCounter, setLogoCounter] = useState(0);
  const [foundEasterEgg, setFoundEasterEgg] = useState(false);

  const variants = {
    rotate: { rotate: [-720, 0], filter: ['drop-shadow(0px 0px 30px blue) invert(30%)', 'drop-shadow(0px 0px 50px green) invert(50%)', 'drop-shadow(0px 0px 100px yellow) invert(100%)', 'drop-shadow(0 0 50px white) invert(10%)', 'drop-shadow(0 0 0 0) invert(0%)'], transition: { duration: 1 }, },
    stop: {rotate:[0], filter: 'drop-shadow(0 0 0 0) invert(0%)',transition: { duration: 1 }}
  };
  
  const handleLogoClick = () => {
    setLogoCounter(logoCounter+1);
    if(logoCounter === 20){
      setFoundEasterEgg(true);
      setLogoCounter(0);
      setTimeout(() => {setFoundEasterEgg(false)},1100);
    }
  }

  return (
    <div className="UpperBar-Wrapper">
      <motion.img src={logo} className='logo icon' variants={variants} animate={foundEasterEgg ? 'rotate' : 'stop'} onClick={handleLogoClick}></motion.img>
      <UserLoggedIn></UserLoggedIn>
    </div>
  );
}

