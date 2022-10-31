import './App.scss';
import PatternCard from './components/PatternCard';
import ImageVictor from './components/ImageVictor';
import City from './components/City';
import NameAndAgeUser from './components/NameAndAgeUser';
import Desc from './components/Desc';
import Divider from './components/Divider';

function App() {
  return (
    <div className="App">
      <div className='profile-card'>
        <PatternCard />
        <ImageVictor />
        <NameAndAgeUser name={'Victor Creast'} age={'26'} />
        <City city='London' />
        <Divider />
        <div className='description'>
          <Desc text={'Followers'} much={'80K'} />
          <Desc text={'Likes'} much={'803K'} />
          <Desc text={'Photos'} much={'1.4K'} />
        </div>
      </div>
    </div>
  );
}

export default App;
