import { useState } from "react"
import { motion } from 'framer-motion'
import close_icon from '../../../icons/close_icon.svg'
import Header2 from "../../Header2/Header2"
import ConfirmationWindow from "../../ConfirmationWindow/ConfirmationWindow";

export default function ModelsRemoveSidebar(props){
    const sidebar_animations = {
        open: {left: '0'},
        close: {left: '-100%'}
    }

    const [deleteModelsWindowOpen, setDeleteModelesWindowOpen] = useState(false);
    const [modelsToDelete, setModelsToDelete] = useState(localStorage.getItem("modelsToDelete") != null ? JSON.parse(localStorage.getItem("modelsToDelete")) : []);
    localStorage.setItem("modelsToDelete", JSON.stringify(modelsToDelete));

    const openRemoveConfirmation = () => {
        if(modelsToDelete.length > 0){
            setDeleteModelesWindowOpen(true);
        }
    }

    const handleCloseRemoveWindowClick = () => {
        setDeleteModelesWindowOpen(!deleteModelsWindowOpen);
    }

    const removeModels = () => {
        let modelsIds = [];
        for (const model of modelsToDelete) {
            modelsIds.push(model.id);
        }

        setModelsToDelete(modelsToDelete.filter((e) => {return !modelsIds?.includes(e.id)}));
        props.setModelsData(props.modelsData.filter((e) => {return !modelsIds?.includes(e.id)}));
        props.setDisplayModelsData(props.modelsData.filter((e) => {return !modelsIds?.includes(e.id)}));

        setDeleteModelesWindowOpen(false);
        props.setFilterRowOpen(false);
    }

    const addModelToRemove = (id, name, type) => {
        if(modelsToDelete.filter(function(e) { return e.id === id; }).length > 0){
            setModelsToDelete(modelsToDelete.filter((model) => { return model.id !== id}));
        } else{
            setModelsToDelete([...modelsToDelete, {id: id, name: name, type: type}]);
        }
    }

    const toggleAllModelsToDelete = () => {
        if(modelsToDelete.length !== props.modelsData.length){
            setModelsToDelete([...props.modelsData]);
        } else if(modelsToDelete.length === props.modelsData.length){
            setModelsToDelete([]);
        }
    }

  return (
    
  <motion.div className='model-sidebar remove-model-sidebar' variants={sidebar_animations} animate={props.isRemoveOpen ? 'open' : 'close'}>
  <Header2 text='Remove Model' />
  <div onClick={props.handleCloseRemoveSidebarClick} className='icon close-btn'><img src={close_icon} className='icon' alt='close sidebar'></img></div>

  <div>
    Select models to remove
  </div>
  <div className='model-sidebar-selection'>
        {   
        props.modelsData.map((model) => {
          const addModelToRemoveInternal = () => {
            addModelToRemove(model.id, model.name, model.type);
        }

          return(
              <div className={modelsToDelete.filter(function(e) { return e.id === model.id; }).length > 0 ? 'models-to-delete models-to-delete-active' : 'models-to-delete'} key={model.id}>
                <div className="model-type">{model.type}</div>
                <div className="model-colon">:</div>
                <div className="model-name">{model.name}</div>
                <div className="model-delete"><img src={close_icon} className='icon' alt='delete model' onClick={addModelToRemoveInternal}></img></div>
              </div>
          );
      })}
        {props.modelsData.length < 1 ? (<div className="models-to-delete">No Models Added</div>) : (<></>)}
  </div>

  <div className='sidebar-controls'>
    {(props.modelsData.length === modelsToDelete.length) && (props.modelsData.length !== 0) ? (<div onClick={toggleAllModelsToDelete} className='icon remove-confirmation-btn models-select-all'>Deselect All</div>) : (<div onClick={toggleAllModelsToDelete} className='icon remove-confirmation-btn models-select-all'>Select All</div>)}

    <div onClick={openRemoveConfirmation} className='icon remove-confirmation-btn'>Remove</div>
  </div>

  {deleteModelsWindowOpen ? (<ConfirmationWindow remove={removeModels} handleCloseRemoveWindowClick={handleCloseRemoveWindowClick} />) : (<></>)}
</motion.div>
  );
}