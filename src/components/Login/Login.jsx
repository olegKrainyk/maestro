import './Login.css';
import { motion } from "framer-motion";
import logo from '../../icons/ceailogo.svg'
import { useNavigate } from 'react-router-dom';

export default function Login(props){

    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.setItem("loggedin", true);
        navigate('/'+localStorage.getItem('active-page'));
        props.setLoggedIn('true');
    }

    return (
      <div className="login-wrapper">

        <motion.div className='login-text' initial={{ opacity: 1, marginTop: 200, fontSize:100, cursor: 'default'}} animate={{
        opacity: [1, 0],
        marginTop: [200, 0]
      }} transition={{ duration: 1.7, delay:0.3}}>LOGIN</motion.div>
        <motion.div className='login-box' initial={{ opacity: 0}}
      animate={{
        scale: [0.4, 1],
        opacity: [0, 0.5, 1],
        background: ['#000','#000','#000', '#000', '#1B2330']
      }} transition={{ duration: 1.2, delay: 0.6}}>

        <motion.img src={logo} alt='ceai logo' className='logo-login-page' animate={{rotate: [360, 0], opacity: [0, 1]}} transition={{duration: 0.4, delay: 1.5}}></motion.img>
        <div className='login-header '>Cutting Edge AI</div>
        <div className='login-item'>Sign in to your account</div>


        <input type='login' placeholder='Login' className='login-field login-item login-input'></input>
        <input type='password' placeholder='Password' className='login-field login-item login-input'></input>

        <div className='login-button login-field login-item' onClick={handleClick}>Log In</div>

        <div className='login-item forgot-password'>
          Forget password?
          <div>Click here to reset.</div>
        </div>

    </motion.div>
          
      </div>
    );
  }
  
  