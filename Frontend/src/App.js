import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import backendUrl from './BackendUrl'
import HomePage from './Pages/HomePage/Home'
import AboutPage from './Pages/AboutPage/About'
import PortfolioPage from './Pages/PortfolioPage/Portfolio'
import ContactPage from './Pages/ContactPage/Contact'
import Loading from "./Pages/LoadingPage/Loading";

function App() {

  const [portfolioData, setPortfolioData] = useState([])
  const [loading, setLoading] = useState(false)

  const getPortfolioData = async () => {
    setLoading(true)
    const response = await fetch(backendUrl)
    const data = await response.json()
    setPortfolioData(data)
    setLoading(false)
  }

  useEffect(() => {
    const getPortfolioList = async () => {
      setLoading(true)
      const response = await fetch(backendUrl)
      const data = await response.json()
      setPortfolioData(data)
      setLoading(false)
    }
    getPortfolioList()
  }, [])

  const createPortfolioData = async (formData) => {
    setLoading(true)
    const response = await fetch(backendUrl + `/create`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    setLoading(false)
    getPortfolioData()
  }

  const createHandler = (formData) => {
    createPortfolioData(formData)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/'><HomePage /></Route>
        <Route exact path='/aboutpage'><AboutPage /></Route>
        <Route exact path='/portfoliopage'><PortfolioPage /></Route>
        <Route exact path='/contactpage'><ContactPage portfolioData={portfolioData} createHandler={createHandler} /></Route>
      </Switch>
    </Router>
  );
}

export default App;
