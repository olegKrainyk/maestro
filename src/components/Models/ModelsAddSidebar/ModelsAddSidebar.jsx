import { useState } from 'react';
import Header2 from '../../Header2/Header2'
import { motion } from "framer-motion";
import close_icon from '../../../icons/close_icon.svg';


export default function ModelsAddSidebar(props){

    const sidebar_animations = {
        open: {left: '0'},
        close: {left: '-100%'}
    };


  const addModel = () => {
    console.log('model added');
    props.setAddOpen(false);
    props.setModelsData([{id: 0, type: 'batch', name: 'Arceus 1208z', description: 'Identifes different vehicles.', files: 'no files'}, {id: 1, type: 'misc', name: 'wp13589', description: 'Detects when workers in port.', files: 'no files'}, {id: 2, type: 'real time', name: 'ShipY×v4568', description: 'Differentiates ship models,', files: 'no files'}, {id: 3, type: 'real time', name: 'trItrs783', description: 'Identifes writing on trains.', files: 'no files'}, {id: 4, type: 'Batch', name: 'ShipCargo Identity', description: 'Locates ship cargo.', files: 'no files'}, {id: 5, type: 'misc', name: 'ff3XD', description: 'Identifies somthing else', files: 'no files'},{id: 6, type: 'batch', name: 'Arceus 1208z', description: 'Identifes different vehicles.', files: 'no files'}, {id: 7, type: 'misc', name: 'wp13589', description: 'Detects when workers in port.', files: 'no files'}, {id: 8, type: 'real time', name: 'ShipY×v4568', description: 'Differentiates ship models,', files: 'no files'}, {id: 9, type: 'real time', name: 'trItrs783', description: 'Identifes writing on trains.', files: 'no files'}, {id: 10, type: 'Batch', name: 'ShipCargo Identity', description: 'Locates ship cargo.', files: 'no files'}, {id:11, type: 'misc', name: 'ff3XD', description: 'Identifies somthing else', files: 'no files'},])
  }

  return(
    
    <motion.div className='model-sidebar' variants={sidebar_animations} animate={props.isAddOpen ? 'open' : 'close'}>
        <Header2 text='Add Model' />
        <div onClick={props.handleCloseAddSidebarClick} className='icon close-btn'><img src={close_icon} className='icon' alt='close sidebar'></img></div>
        
        <div className='add-model-sidebar-controls'>
        <div onClick={addModel} className='icon'>Add </div>
        </div>
    </motion.div>
  );

}


