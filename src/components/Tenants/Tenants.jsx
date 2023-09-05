import './Tenants.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import transition from '../../transition'
import Header1 from '../Header1/Header1'
import SearchBar from '../SearchBar/SearchBar'
import ContentCorners from '../ContentCorners/ContentCorner'
import AddButton from '../AddButton/AddButton'
import RemoveButton from '../RemoveButton/RemoveButton'
import AddTenant from './AddTenant/AddTenant'
import TenantsContent from './TenantsContent/TenantsContent'
import RemoveTenants from './RemoveTenants/RemoveTenants'
import dropdown_icon from '../../icons/dropdown_icon.svg'


function Tenants(){

  const [tenantsData, setTenantsData] = useState(localStorage.getItem("tenantsData") != null ? JSON.parse(localStorage.getItem("tenantsData")) : [{id: 0, name: 'Sealink Logistics', stared: false, icon: dropdown_icon, url: '', maxstreams: 200, maxmodels: 10, APIkey: '', description: '',errors: 0, models: 0, livestreams: 256, archiving: 49, cpuusage: 49, gpuusage: 69, vramusage: 92, ramusage: 42, bandwidth: 12}, {id: 1, name: 'OceanGate Shipping', stared: false, icon: dropdown_icon, url: '', maxstreams: 200, maxmodels: 10, APIkey: '', description: '',errors: 0, models: 0, livestreams: 256, archiving: 49, cpuusage: 49, gpuusage: 69, vramusage: 92, ramusage: 42, bandwidth: 12}, {id: 2, name: 'Harbor Express Transport', stared: true, icon: dropdown_icon, url: '', maxstreams: 200, maxmodels: 10, APIkey: '', description: '',errors: 0, models: 0, livestreams: 256, archiving: 49, cpuusage: 49, gpuusage: 69, vramusage: 92, ramusage: 42, bandwidth: 12},  {id: 3, name: 'UPS shipping ', stared: true, icon: dropdown_icon, url: '', maxstreams: 200, maxmodels: 10, APIkey: '', description: '',errors: 0, models: 0, livestreams: 256, archiving: 49, cpuusage: 49, gpuusage: 69, vramusage: 92, ramusage: 42, bandwidth: 12}]);
  localStorage.setItem("tenantsData", JSON.stringify(tenantsData));

  const [isAddTenantOpen, setIsAddTenantOpen] = useState(false);
  const [isRemoveTenantsOpen, setIsRemoveTenantsOpen] = useState(false);
  const [isListSelected, setIsListSelected] = useState(localStorage.getItem("isListSelected") != null ? JSON.parse(localStorage.getItem("isListSelected")) : false);
  localStorage.setItem('isListSelected', isListSelected);

  const  handleChangeViewClick = () => {
    setIsListSelected(!isListSelected);
    localStorage.setItem('isListSelected',isListSelected);
  }

  const btn_animations = {
    open: {rotate: 360},
    close: {rotate: 0}
  };

  return (
    <>
    <div className="Content-Wrapper">
      <div className='header-search-wrapper'>
        <Header1 text="Tenants"></Header1>
            <div className='edit-components'>
              <SearchBar placeholder='Search tenants' />
              <div className='edit-btns'>
                  <div className='change-content-view-btn icon' onClick={handleChangeViewClick}>{isListSelected ? 'Tile View' : 'List View'}<motion.img src={dropdown_icon} variants={btn_animations} animate={isListSelected ? 'open' : 'close'}/></div>

                  <AddButton setIsAddTenantOpen={setIsAddTenantOpen} isAddTenantOpen={isAddTenantOpen} setIsRemoveTenantsOpen={setIsRemoveTenantsOpen} isRemoveTenantsOpen={isRemoveTenantsOpen} />
                  <RemoveButton setIsRemoveTenantsOpen={setIsRemoveTenantsOpen} isRemoveTenantsOpen={isRemoveTenantsOpen} setIsAddTenantOpen={setIsAddTenantOpen} isAddTenantOpen={isAddTenantOpen} />
              </div>
            </div>
          </div>
        <ContentCorners content={isAddTenantOpen ? <AddTenant setTenantsData={setTenantsData} tenantsData={tenantsData} setIsAddTenantOpen={setIsAddTenantOpen} isAddTenantOpen={isAddTenantOpen} /> : isRemoveTenantsOpen ? <RemoveTenants tenantsData={tenantsData} setTenantsData={setTenantsData} setIsRemoveTenantsOpen={setIsRemoveTenantsOpen} isRemoveTenantsOpen={isRemoveTenantsOpen}/> : <TenantsContent tenantsData={tenantsData} setTenantsData={setTenantsData} isListSelected={isListSelected}/>}/>
    </div>
    </>
  );
}

export default transition(Tenants);