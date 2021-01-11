import {Header} from './layouts';
import HeaderGenres from './containers/HeaderGenres';
import GamesRendered from './containers/GamesRendered';
function App() {
  return (
    <div className="App">
      <div style={{margin: '2rem 0px'}}>
        <Header/>
        <HeaderGenres/>
        <GamesRendered/>
      </div>
    </div>
  );
}

export default App;
