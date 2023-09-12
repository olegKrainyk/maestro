import './AddTenant.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import close_icon from '../../../icons/close_icon.svg'
import Header2 from '../../Header2/Header2'

export default function AddTenant(props){

  const handleCloseAddTenant = () => {
    props.setIsAddTenantOpen(!props.isAddTenantOpen);
  }

  return (
    <>
     <motion.div className='tenants-content-wrapper' animate={{opacity: [0, 0, 0, 1],transform: ['translateY(-40px)', 'translateY(0px)'], transition: {duration: 0.4}}}>
        <Header2 text='Add Tenant' />
        <div onClick={handleCloseAddTenant} className='icon close-btn'><img src={close_icon} className='icon' alt='close add tenant'></img></div>

     </motion.div>
    </>
  );
}