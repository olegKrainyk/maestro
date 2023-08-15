import remove_btn_icon from '../../icons/delete_btn_icon.svg'

export default function RemoveButton(props){

  const handleClick = () => {
    props.setRemoveOpen(!props.isRemoveOpen);
    props.setAddOpen(false);
  }

  return (
    <div><img src={remove_btn_icon} alt='' className='icon' onClick={handleClick}></img></div>
  );
}


