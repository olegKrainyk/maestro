import './Tenants.css';
import transition from '../../transition';
import Header1 from '../Header1/Header1';
import SearchBar from '../SearchBar/SearchBar';
import ContentCorners from '../ContentCorners/ContentCorner';
import AddButton from '../AddButton/AddButton';
import RemoveButton from '../RemoveButton/RemoveButton';

function Tenants(){
  return (
    <>
    <div className="Content-Wrapper">
    <div className='header-search-wrapper'>
      <Header1 text="Tenants"></Header1>

      
          <div className='edit-components'>
            <SearchBar placeholder='Search tenants' />
            <div className='edit-btns'>
              <AddButton />
              <RemoveButton />
              </div>
          </div>
        </div>

        <ContentCorners content=''/>
    </div>
    </>
  );
}

export default transition(Tenants);

