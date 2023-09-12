import './UserLoggedIn.css';
import profile_icon from '../../../icons/profile_icon.svg'

export default function UserLoggedIn(){
  return (
    <div className="userLoggedIn-Wrapper">
      <div className='user-info-block'>Anton Vattay</div>
      <img src={profile_icon} className='user-info-block user-logged-picture icon' alt='profile'></img>
    </div>
  );
}

