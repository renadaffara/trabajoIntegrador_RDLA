import logo from './logo.svg';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/favourites" component={Favourite} />
        <Route path="/login" component={Login} />
        <Route path="/SearchResults" component={SearchResults} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/*" component={NotFound} />
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
