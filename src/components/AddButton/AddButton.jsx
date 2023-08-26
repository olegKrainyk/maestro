import './AddButton.css'
import { motion } from "framer-motion"
import { useState } from 'react'
import add_btn_icon from '../../icons/add_btn_icon.svg'

export default function AddButton(props){

  const btn_animations = {
    open: {rotate: 360},
    close: {rotate: 0}
  };
  const [btnAnimate, setBtnAnimate] = useState(false);

  const handleClick = () => {
    if(props.setAddOpen != null){
    props.setAddOpen(!props.isAddOpen);
    props.setRemoveOpen(false);
    setBtnAnimate(!btnAnimate);
    } else if(props.setIsAddTenantOpen != null){
      props.setIsAddTenantOpen(!props.isAddTenantOpen);
      props.setIsRemoveTenantsOpen(false);
      setBtnAnimate(!btnAnimate);
    }
  }

  return (
    <motion.div variants={btn_animations} animate={btnAnimate ? 'open' : 'close'}><img src={add_btn_icon} alt='add button' className='icon upper-main-btn' onClick={handleClick}></img></motion.div>
  );
}