import './SearchBar.css';
import search_icon from '../../icons/search_icon.svg'

export default function SearchBar(props){
  return (
    <div className='search-bar'>
      <input className='search-bar-input' placeholder={props.placeholder}></input>
      <div className='search-bar-icon'><img src={search_icon} alt='' className='icon'></img></div>
    </div>
  );
}


