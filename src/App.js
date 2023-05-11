import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './Pages/HomePage/Home'
import AboutPage from './Pages/AboutPage/About'
import PortfolioPage from './Pages/PortfolioPage/Portfolio'
import ContactPage from './Pages/ContactPage/Contact'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><HomePage /></Route>
        <Route exact path='/aboutpage'><AboutPage /></Route>
        <Route exact path='/portfoliopage'><PortfolioPage /></Route>
        <Route exact path='/contactpage'><ContactPage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
