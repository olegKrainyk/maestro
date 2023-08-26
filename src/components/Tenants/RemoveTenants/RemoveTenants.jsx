import './RemoveTenants.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function RemoveTenants(props){

  return (
    <>
     <motion.div className='tenants-content-wrapper' animate={{opacity: [0, 0, 0, 1],transform: ['translateY(-40px)', 'translateY(0px)'], transition: {duration: 0.4}}}>
        Remove Tenants
    </motion.div>
    </>
  );
}