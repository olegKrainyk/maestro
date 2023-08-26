import './AddTenant.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AddTenant(props){

  return (
    <>
     <motion.div className='tenants-content-wrapper' animate={{opacity: [0, 0, 0, 1],transform: ['translateY(-40px)', 'translateY(0px)'], transition: {duration: 0.4}}}>Add tenant item</motion.div>
    </>
  );
}