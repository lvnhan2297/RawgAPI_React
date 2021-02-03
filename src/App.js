import React , {useCallback, Suspense} from 'react';
import {Header} from './layouts';
import {routes} from './routes';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Loading from './components/Loading'

function App() {
  const renderRoutes = useCallback(routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        const { path, exact, component } = route;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            component={component}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  },[]);
  return (
    <HashRouter>
      <div className="App">
        <div style={{padding: '2rem 0px'}}>
            <Header/>
            <Suspense fallback={<Loading loading={true} className="u-text-center" />}>
              {renderRoutes(routes)}
            </Suspense>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
