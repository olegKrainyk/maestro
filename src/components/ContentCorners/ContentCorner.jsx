import './ContentCorners.css';
import corner_icon from '../../icons/corner-icon.svg'


export default function ContentCorners(props){
  return (
    <>
    <div className='content-corners'>
        <img src={corner_icon} className='corner corner-l-t icon' alt=''></img>
        <img src={corner_icon} className='corner corner-l-b icon' alt=''></img>
        <img src={corner_icon} className='corner corner-r-t icon' alt=''></img>
        <img src={corner_icon} className='corner corner-r-b icon' alt=''></img>

        <div className='inside-corners-wrapper'>
            <div className='inside-corners'>
            {props.content}
            </div>
        </div>
    </div>
    </>
  );
}


