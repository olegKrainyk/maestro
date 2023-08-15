import './AddButton.css'
import add_btn_icon from '../../icons/add_btn_icon.svg'

export default function AddButton(props){

  const handleClick = () => {
    props.setAddOpen(!props.isAddOpen);
    props.setRemoveOpen(false);
  }

  return (
    <div><img src={add_btn_icon} alt='add button' className='icon' onClick={handleClick}></img></div>
  );
}


