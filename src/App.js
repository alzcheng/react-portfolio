import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
