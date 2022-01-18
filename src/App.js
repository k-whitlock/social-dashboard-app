import './App.css';
import Header from './components/Header';
import MainCard from './components/MainCard';
import followers from './data/followers.json';
import Overview from './components/Overview';
import SmallCard from './components/SmallCard';
import engagement from './data/engagement.json';

function App() {
  return (
    <div className="app">
      <div className="app-bg"></div>
      <div className="app-container">
        <Header />
        <div className="grid-container">
        {/* dynamically create main cards from the followers data */}
        {followers.map((item, i) => {
          return (
            <MainCard 
              key={i}
              platform={item.platform}
              username={item.username}
              totalFollowers={item.totalFollowers}
              followerCount={item.followerCount}
              movement={item.movement}
              followerText={item.followerText}
            />
          );
        })}
        </div>
        <Overview />
        <div className="grid-container">
        {/* dynamically create small cards from the engagement data */}
        {engagement.map((data, i) => {
          return (
            <SmallCard
              key={i}
              engagement={data.engagement}
              total={data.total}
              rating={data.rating}
              platform={data.platform}
              movement={data.movement}
            />
          ); 
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
