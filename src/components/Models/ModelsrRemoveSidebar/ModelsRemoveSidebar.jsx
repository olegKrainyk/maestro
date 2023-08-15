import { useState } from "react";
import close_icon from '../../../icons/close_icon.svg';
import Header2 from "../../Header2/Header2";
import { motion } from "framer-motion";

export default function ModelsRemoveSidebar(props){

const sidebar_animations = {
    open: {left: '0'},
    close: {left: '-100%'}
};
const remove_window_animations = {
    open: {top: '0'},
    close: {top: '-100%'}
};

const [deleteModelsWindowOpen, setDeleteModelesWindowOpen] = useState(false);
const [modelsToDelete, setModelsToDelete] = useState([]);

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
        
        console.log('removed all selected models');
        setDeleteModelesWindowOpen(false);
    }

    const addModelToRemove = (id, name, type) => {
        if(modelsToDelete.filter(function(e) { return e.id === id; }).length > 0){
            setModelsToDelete(modelsToDelete.filter((model) => { return model.id !== id}));
        } else{
            setModelsToDelete([...modelsToDelete, {id: id, name: name, type: type}]);
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
    <div onClick={openRemoveConfirmation} className='icon remove-confirmation-btn'>Remove</div>
  </div>

  <motion.div variants={remove_window_animations}  className="delete-models-window-wrapper" animate={deleteModelsWindowOpen ? 'open' : 'close'}>
      <div className="delete-models-window">
        <div onClick={handleCloseRemoveWindowClick} className='icon remove-window-close-btn'><img src={close_icon} className='icon' alt='close remove models window'></img></div>

        
        <div className="delete-window-header-content-wrapper">
            <Header2 text='Delete these models?'/>
            <div className="models-to-delete-window-list">
                {   
                modelsToDelete.map((model) => {

                return(
                    <div key={model.id} className="models-to-delete-window-list-item">
                        <div className="model-type">{model.type}</div>
                        <div className="model-name">{model.name}</div>
                    </div>
                );
                })}
            </div>
        </div>

        <div className="remove-window-buttons">
            <div onClick={handleCloseRemoveWindowClick} className="icon cancel-btn">Cancel</div>
            <div onClick={removeModels} className="icon delete-btn">Delete</div>
        </div>
      </div>
  </motion.div>
</motion.div>
  );
}