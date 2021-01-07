import {Header} from './layouts';
import {HeaderGenres,GamesRendered} from './containers';
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
