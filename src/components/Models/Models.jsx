import './Models.css';
import transition from '../../transition';
import Header1 from '../Header1/Header1';
import SearchBar from '../SearchBar/SearchBar'
import AddButton from '../AddButton/AddButton';
import RemoveButton from '../RemoveButton/RemoveButton';
import corner_icon from '../../icons/corner-icon.svg'


function Models(){
  return (
    <>
    <div className="Content-Wrapper">
      <div className='header-search-wrapper'>
      <Header1 text="Model Zoo"></Header1>

        <div className='edit-components'>
          <SearchBar />
          <div className='edit-btns'>
            <AddButton />
            <RemoveButton />
          </div>
        </div>
      </div>
      <div className='content-corners'>
          <img src={corner_icon} className='corner corner-l-t icon'></img>
          <img src={corner_icon} className='corner corner-l-b icon'></img>
          <img src={corner_icon} className='corner corner-r-t icon'></img>
          <img src={corner_icon} className='corner corner-r-b icon'></img>

          <div></div>

        </div>
    </div>
    </>
  );
}

export default transition(Models);

