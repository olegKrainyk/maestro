import {motion} from "framer-motion";
import './transition.css';

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent></OgComponent>
            <motion.div className="slide-in" initial={{scaleY: 0 }} animate={{scaleY: 0 }} exit={{scaleY: 1 }} transition={{duration: 1, ease: [0.22, 1, 0.36, 11 ]}}/>
            <motion.div className="slide-out" initial={{scaleY: 1 }} animate={{scaleY: 0 }} exit={{scaleY: 0 }} transition={{duration: 1, ease: [0.22, 1, 0.36, 11 ]}}/>
        </>
    )
}

export default transition;