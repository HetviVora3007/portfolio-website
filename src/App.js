import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import HomePage from './Pages/HomePage/Home'
import AboutPage from './Pages/HomePage/Home'
import PortfolioPage from './Pages/HomePage/Home'
import ContactPage from './Pages/HomePage/Home'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'><HomePage /></Route>
          <Route exact path='/aboutpage'><AboutPage /></Route>
          <Route exact path='/portfoliopage'><PortfolioPage /></Route>
          <Route exact path='/contactpage'><ContactPage /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
