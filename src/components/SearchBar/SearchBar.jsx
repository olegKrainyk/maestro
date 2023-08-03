import './SearchBar.css';
import search_icon from '../../icons/search_icon.svg'

export default function SearchBar(){
  return (
    <div className='search-bar'>
      <input className='search-bar-input'></input>
      <div className='search-bar-icon'><img src={search_icon} alt=''></img></div>
    </div>
  );
}


