import { useState } from 'react'
import { motion } from 'framer-motion'
import profile_icon from '../../../../icons/profile_icon.svg'
import star_notactive_icon from '../../../../icons/star_notactive_icon.svg'
import star_active_icon from '../../../../icons/star_active_icon.svg'

export default function SingleTenant(props){

    const handleStarClick = (id) => {
        const editedTenantsData = (props.tenantsData).map((tenant, index) => {

            if (id === index) {
                tenant.stared = !tenant.stared;
                return tenant;
            } else {
                return tenant;
            }
        });
        props.setTenantsData(editedTenantsData);
      }

    return (
        <>
            <div className='single-tenant' key={props.tenant.id}>
                <div className='single-tenant-picture-wrapper'>
                    <img className='tenant-profile-picture' src={profile_icon} alt='profile img' />
                    <img className='tenant-star icon' src={props.tenant.stared ? star_active_icon : star_notactive_icon} alt='' onClick={() => {handleStarClick(props.tenant.id)}}/>
                </div>
                <div className='single-tenant-name'>{props.tenant.name}</div>
            </div>
        </>
    );
}