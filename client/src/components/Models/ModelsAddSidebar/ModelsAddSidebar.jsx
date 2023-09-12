import { useState } from 'react';
import Header2 from '../../Header2/Header2'
import { motion } from "framer-motion";
import close_icon from '../../../icons/close_icon.svg';

export default function ModelsAddSidebar(props){
  const sidebar_animations = {
      open: {left: '0'},
      close: {left: '-100%'}
  };

  const field_required_animation = {
    open: {opacity: 1},
    close: {height: 0, opacity: 0}
  }

  const [modelId, setModelId] = useState(localStorage.getItem("maxID") != null ? localStorage.getItem("maxID") : () => {let maxIDmodelsData = 0; for (const model of props.modelsData) {if(model.id > maxIDmodelsData){maxIDmodelsData = model.id;}} return maxIDmodelsData} );
  localStorage.setItem("maxID", parseInt(modelId));

  const [modelName, setModelName] = useState('');
  const [modelType, setModelType] = useState('');
  const [modelDescription, setModelDescription] = useState('');
  const [modelFiles, setModelFiles] = useState('');
  const [modelStreams, setModelStreams] = useState('');

  const [filedsRequiredOpen, setFieldsRequiredOpen] = useState(false);

  const addModelInput = () => {

    if(modelDescription !== '' && modelName !== '' && modelType !== ''){
      setModelId(parseInt(modelId)+1);
      props.setModelsData([...props.modelsData, {id: modelId, name: modelName, type: modelType, description: modelDescription, files: modelFiles, streams: modelStreams, visible: 1}]);
      resetModelInfo();
      props.setDisplayModelsData(props.modelsData);
    } else{
      setFieldsRequiredOpen(true);
      setTimeout(() => {setFieldsRequiredOpen(false)}, 1500);
    }
  }
  
  const addModels = () => {
    console.log('model added');
    props.setAddOpen(false);
    props.setModelsData([...props.modelsData, {id: 0, type: 'batch', name: 'Arceus 1208z', description: 'Identifes different vehicles.', files: 'no files', visible: 1}, {id: 1, type: 'misc', name: 'wp13589', description: 'Detects when workers in port.', files: 'no files', visible: 1}, {id: 2, type: 'real time', name: 'ShipY×v4568', description: 'Differentiates ship models,', files: 'no files', visible: 1}, {id: 3, type: 'real time', name: 'trItrs783', description: 'Identifes writing on trains.', files: 'no files', visible: 1}, {id: 4, type: 'batch', name: 'ShipCargo Identity', description: 'Locates ship cargo.', files: 'no files', visible: 1}, {id: 5, type: 'misc', name: 'ff3XD', description: 'Identifies somthing else', files: 'no files', visible: 1},{id: 6, type: 'batch', name: 'Arceus 1208z', description: 'Identifes different vehicles.', files: 'no files', visible: 1}, {id: 7, type: 'misc', name: 'wp13589', description: 'Detects when workers in port.', files: 'no files', visible: 1}, {id: 8, type: 'real time', name: 'ShipY×v4568', description: 'Differentiates ship models,', files: 'no files', visible: 1}, {id: 9, type: 'real time', name: 'trItrs783', description: 'Identifes writing on trains.', files: 'no files', visible: 1}, {id: 10, type: 'batch', name: 'ShipCargo Identity', description: 'Locates ship cargo.', files: 'no files', visible: 1}, {id:11, type: 'misc', name: 'ff3XD', description: 'Identifies somthing else', files: 'no files', visible: 1},])
    props.setDisplayModelsData([...props.modelsData, {id: 0, type: 'batch', name: 'Arceus 1208z', description: 'Identifes different vehicles.', files: 'no files', visible: 1}, {id: 1, type: 'misc', name: 'wp13589', description: 'Detects when workers in port.', files: 'no files', visible: 1}, {id: 2, type: 'real time', name: 'ShipY×v4568', description: 'Differentiates ship models,', files: 'no files', visible: 1}, {id: 3, type: 'real time', name: 'trItrs783', description: 'Identifes writing on trains.', files: 'no files', visible: 1}, {id: 4, type: 'batch', name: 'ShipCargo Identity', description: 'Locates ship cargo.', files: 'no files', visible: 1}, {id: 5, type: 'misc', name: 'ff3XD', description: 'Identifies somthing else', files: 'no files', visible: 1},{id: 6, type: 'batch', name: 'Arceus 1208z', description: 'Identifes different vehicles.', files: 'no files', visible: 1}, {id: 7, type: 'misc', name: 'wp13589', description: 'Detects when workers in port.', files: 'no files', visible: 1}, {id: 8, type: 'real time', name: 'ShipY×v4568', description: 'Differentiates ship models,', files: 'no files', visible: 1}, {id: 9, type: 'real time', name: 'trItrs783', description: 'Identifes writing on trains.', files: 'no files', visible: 1}, {id: 10, type: 'batch', name: 'ShipCargo Identity', description: 'Locates ship cargo.', files: 'no files', visible: 1}, {id:11, type: 'misc', name: 'ff3XD', description: 'Identifies somthing else', files: 'no files', visible: 1},]);
  }

  const resetModelInfo = () => {
    setModelName('');
    setModelType('');
    setModelDescription('');
    setModelFiles([]);
    setModelStreams([]);
  }

  const handleChangeName = (e) => {
    setModelName(e.target.value);
  }
  const handleChangeType = (e) => {
    setModelType(e.target.value);
  }
  const handleChangeDescription = (e) => {
    setModelDescription(e.target.value);
  }

  return(
    <motion.div className='model-sidebar' variants={sidebar_animations} animate={props.isAddOpen ? 'open' : 'close'}>
        <Header2 text='Add Model' />
        <div onClick={props.handleCloseAddSidebarClick} className='icon close-btn'><img src={close_icon} className='icon' alt='close sidebar'></img></div>

        <div className='add-model-sidebar-controls'>
          <div onClick={addModels} className='icon'>Add model list</div>
        </div>

        <div>
          <div className='add-model-input-list'>
            <input onChange={handleChangeName} value={modelName} type='text' maxLength={15} placeholder='Name'/>
            <input onChange={handleChangeType} value={modelType} type='text' maxLength={12} placeholder='Type'/>
            <input onChange={handleChangeDescription} value={modelDescription} type='text' maxLength={25} placeholder='Description' />
          </div>
          <motion.div className='fileds-required-text' variants={field_required_animation} animate={filedsRequiredOpen ? 'open' : 'close'}>All fileds are required.</motion.div>
        </div>
        <div className='remove-window-buttons'>
            <div onClick={resetModelInfo} className="icon cancel-btn">Reset</div>
            <div onClick={addModelInput} className='icon cancel-btn' type='submit'>Add Model</div>
        </div>
    </motion.div>
  );

}