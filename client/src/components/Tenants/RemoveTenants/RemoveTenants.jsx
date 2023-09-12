import './RemoveTenants.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header2 from '../../Header2/Header2'
import close_icon from '../../../icons/close_icon.svg'
import profile_icon from '../../../icons/profile_icon.svg'
import ConfirmationWindow from '../../ConfirmationWindow/ConfirmationWindow'

export default function RemoveTenants(props){

  const [deleteTenantsWindowOpen, setDeleteTenantsWindowOpen] = useState(false);
  const [tenantsToDelete, setTenantsToDelete] = useState(localStorage.getItem("tenantsToDelete") != null ? JSON.parse(localStorage.getItem("tenantsToDelete")) : []);
  localStorage.setItem("tenantsToDelete", JSON.stringify(tenantsToDelete));

  const openDeleteConfirmation = () => {
    if(tenantsToDelete.length > 0){
        setDeleteTenantsWindowOpen(true);
    }
  }

  const handleCloseRemoveWindowClick = () => {
    setDeleteTenantsWindowOpen(!deleteTenantsWindowOpen);
  }

  const handleCloseRemoveTenants = () => {
    props.setIsRemoveTenantsOpen(!props.isRemoveTenantsOpen);
  }

  const removeTenants = () => {
    let tenantsIds = [];
    for (const tenant of tenantsToDelete) {
        tenantsIds.push(tenant.id);
    }

    setTenantsToDelete(tenantsToDelete.filter((t) => {return !tenantsIds?.includes(t.id)}));
    props.setTenantsData(props.tenantsData.filter((t) => {return !tenantsIds?.includes(t.id)}));
    setDeleteTenantsWindowOpen(false);
  }

  const addTenantToRemove = (id, name) => {
    if(tenantsToDelete.filter(function(e) { return e.id === id; }).length > 0){
      setTenantsToDelete(tenantsToDelete.filter((tenant) => { return tenant.id !== id}));
  } else{
      setTenantsToDelete([...tenantsToDelete, {id: id, name: name}]);
  }}

  const toggleAllTenantsToDelete = () => {
    if(tenantsToDelete.length !== props.tenantsData.length){
        setTenantsToDelete([...props.tenantsData]);
    } else if(tenantsToDelete.length === props.tenantsData.length){
        setTenantsToDelete([]);
    }
  }

  return (
    <>
     <motion.div className='tenants-content-wrapper' animate={{opacity: [0, 0, 0, 1],transform: ['translateY(-40px)', 'translateY(0px)'], transition: {duration: 0.4}}}>
      <div>
          <Header2 text='Select tenants to remove' />
          <div onClick={handleCloseRemoveTenants} className='icon close-btn'><img src={close_icon} className='icon' alt='close remove tenants'></img></div>

          <div className='tenant-remove-selection'>
                {   
                props.tenantsData.map((tenant) => {
                  
                  return(
                      <div className={tenantsToDelete.filter(function(e) { return e.id === tenant.id; }).length > 0 ? 'single-tenant-active single-tenant icon' : 'single-tenant icon'} key={tenant.id} onClick={() => {addTenantToRemove(tenant.id, tenant.name)}}>    
                            <img className='tenant-profile-picture' src={profile_icon} alt='profile img' />
                            <div className='single-tenant-name'>{tenant.name}</div>
                      </div>
                  );
              })}

                {props.tenantsData.length < 1 ? (<div>No Tenants Added</div>) : (<></>)}
          </div>
      </div>

      <div className='tenant-selection-controls'>
          {(props.tenantsData.length === tenantsToDelete.length) && (props.tenantsData.length !== 0) ? (<div onClick={toggleAllTenantsToDelete} className='icon remove-confirmation-btn models-select-all'>Deselect All</div>) : (<div onClick={toggleAllTenantsToDelete} className='icon remove-confirmation-btn models-select-all'>Select All</div>)}
          <div onClick={openDeleteConfirmation} className='icon remove-confirmation-btn'>Remove</div>
      </div>  
    </motion.div>

    {deleteTenantsWindowOpen ? (<ConfirmationWindow remove={removeTenants} handleCloseRemoveWindowClick={handleCloseRemoveWindowClick} />) : (<></>) }
    </>
  );
}