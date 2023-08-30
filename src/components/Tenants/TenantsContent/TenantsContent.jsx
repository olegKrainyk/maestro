import './TenantsContent.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import profileIcon from '../../../icons/profile_icon.svg'
import SingleTenant from './SingleTenant/SingleTenant'
import TenantRow from './TenantRow/TenantRow'

export default function TenantsContent(props){

  let isListSelected = props.isListSelected

  return (
    <>
     <motion.div className='tenants-list-wrapper' animate={{opacity: [0, 0, 0, 1],transform: ['translateY(-40px)', 'translateY(0px)'], transition: {duration: 0.4}}}>
        <motion.div className={isListSelected ? 'tenants-list' : 'tenants-grid'} animate={{opacity: [0, 1], transition:{duration: 0.5, ease: 'backInOut'}}}>

        {   
        props.tenantsData.filter((tenant) => tenant.stared !== false).map((tenant) => {

          return(
              isListSelected ? <TenantRow tenantsData={props.tenantsData} setTenantsData={props.setTenantsData} tenant={tenant} key={tenant.id} /> : <SingleTenant tenantsData={props.tenantsData} setTenantsData={props.setTenantsData} tenant={tenant} key={tenant.id} />
          );
         })
        }
        {   
        props.tenantsData.filter((tenant) => tenant.stared !== true).map((tenant) => {

          return(
              isListSelected ? <TenantRow tenantsData={props.tenantsData} setTenantsData={props.setTenantsData} tenant={tenant} key={tenant.id} /> : <SingleTenant tenantsData={props.tenantsData} setTenantsData={props.setTenantsData} tenant={tenant} key={tenant.id} />
          );
         })
        }
        </motion.div>
     </motion.div>
    </>
  );
}