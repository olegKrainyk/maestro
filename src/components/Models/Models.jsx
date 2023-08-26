import './Models.css'
import { useState } from 'react'
import transition from '../../transition'
import Header1 from '../Header1/Header1'
import SearchBar from '../SearchBar/SearchBar'
import AddButton from '../AddButton/AddButton'
import RemoveButton from '../RemoveButton/RemoveButton'
import ContentCorners from '../ContentCorners/ContentCorner'
import ModelsContent from './ModelsContent/ModelsContent'

function Models(){

  const [isAddOpen, setAddOpen] = useState(localStorage.getItem("isAddOpen") != null ? JSON.parse(localStorage.getItem("isAddOpen")) : false);
  localStorage.setItem("isAddOpen", JSON.stringify(isAddOpen));

  const [isRemoveOpen, setRemoveOpen] = useState(localStorage.getItem("isRemoveOpen") != null ? JSON.parse(localStorage.getItem("isRemoveOpen")) : false);
  localStorage.setItem("isRemoveOpen", JSON.stringify(isRemoveOpen));

  return (
    <>
      <div className="Content-Wrapper">
        <div className='header-search-wrapper'>
          <Header1 text="Model Zoo" />

          <div className='edit-components'>
            <SearchBar placeholder='Search models' />
            <div className='edit-btns'>
              <AddButton setAddOpen={setAddOpen} isAddOpen={isAddOpen} isRemoveOpen={isRemoveOpen} setRemoveOpen={setRemoveOpen}/>
              <RemoveButton setAddOpen={setAddOpen} isAddOpen={isAddOpen} setRemoveOpen={setRemoveOpen} isRemoveOpen={isRemoveOpen}/>
            </div>
          </div>
        </div>
        <ContentCorners content={<ModelsContent isAddOpen={isAddOpen} setAddOpen={setAddOpen} isRemoveOpen={isRemoveOpen} setRemoveOpen={setRemoveOpen} /> }/>
      </div>
    </>
  );
}

export default transition(Models);