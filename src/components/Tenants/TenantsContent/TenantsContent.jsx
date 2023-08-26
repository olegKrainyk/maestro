import './TenantsContent.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import profileIcon from '../../../icons/profile_icon.svg'

export default function TenantsContent(props){


  const testArr = [{id: 1, name: 'Grid'}, {id: 2, name: 'List'}, {id: 3, name: 'Grid'}, {id: 4, name: 'List'}, {id: 5, name: 'Grid'}, {id: 6, name: 'List'}, {id: 7, name: 'Grid'}, {id: 8, name: 'List'}]

  let isListSelected = props.isListSelected

  return (
    <>
     <motion.div className='tenants-content-wrapper' animate={{opacity: [0, 0, 0, 1],transform: ['translateY(-40px)', 'translateY(0px)'], transition: {duration: 0.4}}}>
        <motion.div className={isListSelected ? 'tenants-list' : 'tenants-grid'} animate={{opacity: [0, 1], transition:{duration: 0.5, ease: 'backInOut'}}}>

        {   
        testArr.map((display) => {

          return(
              <div key={display.id}><img src={profileIcon} /></div>
          );
         })
        }
        </motion.div>
     </motion.div>
    </>
  );
}