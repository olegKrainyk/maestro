import './ModelsContent.css'
import { useState } from 'react'
import { motion } from "framer-motion"
import ModelsRemoveSidebar from '../ModelsrRemoveSidebar/ModelsRemoveSidebar'
import ModelsAddSidebar from '../ModelsAddSidebar/ModelsAddSidebar'

export default function ModelsContent(props){
  const [modelsData, setModelsData] = useState(localStorage.getItem("modelsData") != null ? JSON.parse(localStorage.getItem("modelsData")) : []);
  localStorage.setItem("modelsData", JSON.stringify(modelsData));

  const [displayModelsData, setDisplayModelsData] = useState(modelsData);
  const [filterRowOpen, setFilterRowOpen] = useState(false);

  const handleCloseAddSidebarClick = () => {
    props.setAddOpen(false);
  }

  const handleCloseRemoveSidebarClick = () => {
    props.setRemoveOpen(false);
  }

  const handleOpenFilterRow = () => {
    if(modelsData.length !== 0){
      setFilterRowOpen(!filterRowOpen);
    }
  }

  const filterType = (type) => {
      
      setFilterRowOpen(!filterRowOpen);
      if(type.type !== 'all'){
        console.log("filtering isn't available for "+type.type+ ' right now');
      } else {
        console.log('showing all');
      }
  }

  const filter_types = [{id: 0, type: 'all'}, {id: 1, type:'real time'}, {id: 2, type:'batch'}, {id: 3, type: 'misc'}];

  const filter_row_animations = {
    open: { opacity: 1},
    close: {height: 0, opacity: 0}
  };

  return (
<>
  <div className='flex-table'>

    <div className='flex-table-row'>
      <div className={filterRowOpen ? 'flex-table-item flex-table-item-active' : 'flex-table-item'} onClick={handleOpenFilterRow}><>type</></div>
      <div className='flex-table-item'><>model name</></div>
      <div className='flex-table-item'><>description</></div>
      <div className='flex-table-item'><>files</></div>
    </div>

    <motion.div className='flex-table-row models-filter-list-wrapper' variants={filter_row_animations} animate={filterRowOpen ? 'open' : 'close'}>
          {
            filter_types.map((type) => {
              const filterTypeInternal = () => {
                  filterType(type);
              }
              return(
                <div onClick={filterTypeInternal} className='flex-table-item icon' key={type.id}>{type.type}</div>
              );
            })
          }
      </motion.div>

    {   
      modelsData.map((model) => {
        return(
          <div className={model.visible === 1 ? 'flex-table-row' : 'flex-table-row invisible'} key={model.id}>
            <div className='flex-table-item'><>{model.type}</></div>
            <div className='flex-table-item'><>{model.name}</></div>
            <div className='flex-table-item'><>{model.description}</></div>
            <div className='flex-table-item'><>{model.files}</></div>
          </div>
        );
    })}
  </div>

  <ModelsRemoveSidebar modelsData={modelsData} displayModelsData={displayModelsData} setModelsData={setModelsData} isRemoveOpen={props.isRemoveOpen} setRemoveOpen={props.setRemoveOpen} handleCloseRemoveSidebarClick={handleCloseRemoveSidebarClick} setFilterRowOpen={setFilterRowOpen} />
  <ModelsAddSidebar modelsData={modelsData} displayModelsData={displayModelsData} setModelsData={setModelsData} isAddOpen={props.isAddOpen} setAddOpen={props.setAddOpen} handleCloseAddSidebarClick={handleCloseAddSidebarClick} />
    
</>
  );
}