import './Tenants.css';
import transition from '../../transition';
import Header1 from '../Header1/Header1';

function Tenants(){
  return (
    <>
    <div className="Content-Wrapper">
      <Header1 text="Tenants"></Header1>
    </div>
    </>
  );
}

export default transition(Tenants);

