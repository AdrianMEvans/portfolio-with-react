import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Knowledgebase from './Knowledgebase';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PortfolioDetail from './PortfolioDetail';

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
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/knowledgebase">
              <Knowledgebase />
            </Route>
            <Route exact path="/portfolio/:id">
              <PortfolioDetail />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
