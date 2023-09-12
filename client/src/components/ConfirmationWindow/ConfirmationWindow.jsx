import { motion } from 'framer-motion'
import './ConfirmationWindow.css'

export default function ConfirmationWindow(props){

    const handleCancelClick = () => {
        props.handleCloseRemoveWindowClick();
    }

    const handleRemoveClick = () => {
        props.remove();
    }

  return (
    <>
     <motion.div className='remove-tanants-window-wrapper' animate={{opacity: [0, 0, 0, 1],transform: ['translateY(-40px)', 'translateY(0px)'], transition: {duration: 0.4}}}>
      <div className='remove-tanants-window'>
        <div>Are you sure?</div>
        <div className="tenant-selection-controls">
            <div onClick={handleCancelClick} className="icon remove-confirmation-btn models-select-all">Cancel</div>
            <div onClick={handleRemoveClick} className="icon remove-confirmation-btn">Delete</div>
        </div>
      </div>
    </motion.div>
    </>
  );
}