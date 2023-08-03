import './SideBarIcon.css';
import { motion } from "framer-motion";


export default function SideBarIcon(props){
  return (
    
      <motion.img src={props.icon_path} className='sidebar-icon' initial={{ opacity: 0, scale: 1 }}
      animate={{
        scale: [1.5, 1],
        rotate: [90, 0],
        opacity: [0, 0.1, 0.5, 1]
      }}
    transition={{ duration: 0.5 }}></motion.img>
    
  );
}

