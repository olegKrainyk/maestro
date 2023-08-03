import './GlobalStreams.css';
import transition from '../../transition';
import Header1 from '../Header1/Header1';

function GlobalStreams(){
  return (
    <div className="Content-Wrapper">
      <Header1 text="Global Streams"></Header1>
    </div>
  );
}

export default transition(GlobalStreams);

