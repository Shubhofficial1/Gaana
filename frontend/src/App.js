import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Rightbar from './components/Rightbar'
function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/search' exact>
            Search
          </Route>
          <Route path='/discover' exact>
            discover
          </Route>
          <Route path='/album' exact>
            Album
          </Route>
          <Route path='/artists' exact>
            artist
          </Route>
          <Route path='/recent' exact>
            recent
          </Route>
          <Route path='/favorites' exact>
            favorites
          </Route>
          <Route path='/local' exact>
            Local
          </Route>
          <Route path='/create-new' exact>
            create-new
          </Route>
          <Route path='/pop-punk' exact>
            Pop Punk
          </Route>
          <Route path='/rocks' exact>
            rocks
          </Route>
        </Switch>
        <Rightbar />
      </div>
    </Router>
  )
}

export default App
