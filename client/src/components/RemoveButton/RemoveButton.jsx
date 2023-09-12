import { useState } from 'react'
import remove_btn_icon from '../../icons/delete_btn_icon.svg'
import { motion } from "framer-motion"

export default function RemoveButton(props){

  const btn_animations = {
    open: {rotate: 360},
    close: {rotate: 0}
  };
  const [btnAnimate, setBtnAnimate] = useState(false);

  const handleClick = () => {
    if(props.setRemoveOpen != null){
      props.setRemoveOpen(!props.isRemoveOpen);
      props.setAddOpen(false);
      setBtnAnimate(!btnAnimate);
    } else if(props.setIsRemoveTenantsOpen != null) {
      props.setIsRemoveTenantsOpen(!props.isRemoveTenantsOpen);
      props.setIsAddTenantOpen(false);
      setBtnAnimate(!btnAnimate);
    }
  }

  return (
    <motion.div variants={btn_animations} animate={btnAnimate ? 'open' : 'close'}><img src={remove_btn_icon} alt='' className='icon upper-main-btn' onClick={handleClick}></img></motion.div>
  );
}