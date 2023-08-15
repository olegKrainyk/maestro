import { useState } from 'react';
import './ModelsContent.css';
import ModelsRemoveSidebar from '../ModelsrRemoveSidebar/ModelsRemoveSidebar';
import ModelsAddSidebar from '../ModelsAddSidebar/ModelsAddSidebar';


// {id: 0, type: 'type', name: 'model name', description: 'description', files: 'files'}

export default function ModelsContent(props){
  const [modelsData, setModelsData] = useState([]);

  const handleCloseAddSidebarClick = () => {
    props.setAddOpen(false);
  }

  const handleCloseRemoveSidebarClick = () => {
    props.setRemoveOpen(false);
  }

  return (
<>
  <div className='flex-table'>

    <div className='flex-table-row'>
        <div className='flex-table-item'><>type</></div>
        <div className='flex-table-item'><>model name</></div>
        <div className='flex-table-item'><>description</></div>
        <div className='flex-table-item'><>files</></div>
    </div>

    {   
      modelsData.map((model) => {
        return(
          <div className='flex-table-row' key={model.id}>
            <div className='flex-table-item'><>{model.type}</></div>
            <div className='flex-table-item'><>{model.name}</></div>
            <div className='flex-table-item'><>{model.description}</></div>
            <div className='flex-table-item'><>{model.files}</></div>
          </div>
        );
    })}
  </div>

  

  <ModelsRemoveSidebar modelsData={modelsData} setModelsData={setModelsData} isRemoveOpen={props.isRemoveOpen} setRemoveOpen={props.setRemoveOpen} handleCloseRemoveSidebarClick={handleCloseRemoveSidebarClick} />
  <ModelsAddSidebar modelsData={modelsData} setModelsData={setModelsData} isAddOpen={props.isAddOpen} setAddOpen={props.setAddOpen} handleCloseAddSidebarClick={handleCloseAddSidebarClick} />
  


  </>
  );
}


