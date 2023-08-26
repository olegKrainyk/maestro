import './Tenants.css'
import { useState } from 'react'
import transition from '../../transition'
import Header1 from '../Header1/Header1'
import SearchBar from '../SearchBar/SearchBar'
import ContentCorners from '../ContentCorners/ContentCorner'
import AddButton from '../AddButton/AddButton'
import RemoveButton from '../RemoveButton/RemoveButton'
import AddTenant from './AddTenant/AddTenant'
import TenantsContent from './TenantsContent/TenantsContent'
import RemoveTenants from './RemoveTenants/RemoveTenants'

function Tenants(){

  const [isAddTenantOpen, setIsAddTenantOpen] = useState(false);
  const [isRemoveTenantsOpen, setIsRemoveTenantsOpen] = useState(false);
  const [isListSelected, setIsListSelected] = useState(false);

  return (
    <>
    <div className="Content-Wrapper">
      <div className='header-search-wrapper'>
        <Header1 text="Tenants"></Header1>

            <div className='edit-components'>
              <SearchBar placeholder='Search tenants' />
              <div className='edit-btns'>
                  <div className='change-content-view-btn' onClick={() => {setIsListSelected(!isListSelected)}}>{isListSelected ? 'Show Grid' : 'Show List'}</div>

                <AddButton setIsAddTenantOpen={setIsAddTenantOpen} isAddTenantOpen={isAddTenantOpen} setIsRemoveTenantsOpen={setIsRemoveTenantsOpen} isRemoveTenantsOpen={isRemoveTenantsOpen} />
                <RemoveButton setIsRemoveTenantsOpen={setIsRemoveTenantsOpen} isRemoveTenantsOpen={isRemoveTenantsOpen} setIsAddTenantOpen={setIsAddTenantOpen} isAddTenantOpen={isAddTenantOpen} />
              </div>
            </div>
          </div>
        <ContentCorners content={isAddTenantOpen ? <AddTenant /> : isRemoveTenantsOpen ? <RemoveTenants isRemoveTenantsOpen={isRemoveTenantsOpen}/> : <TenantsContent isListSelected={isListSelected}/>}/>
    </div>
    </>
  );
}

export default transition(Tenants);