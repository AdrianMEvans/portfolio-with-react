import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
