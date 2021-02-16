import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Rightbar from './components/Rightbar'
import Artists from './Pages/Artists'
import Discover from './Pages/Discover'
import Album from './Pages/Album'
import Search from './Pages/Search'

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/' exact>
            <Sidebar />
            <Home />
            <Rightbar />
          </Route>
          <Route path='/search' exact>
            <Sidebar />
            <Search />
            <Rightbar />
          </Route>
          <Route path='/discover' exact>
            <Sidebar />
            <Discover />
            <Rightbar />
          </Route>
          <Route path='/album' exact>
            <Sidebar />
            <Album />
            <Rightbar />
          </Route>
          <Route path='/artists' exact>
            <Sidebar />
            <Artists />
            <Rightbar />
          </Route>
          <Route path='/recent' exact>
            <Sidebar />
            recent
            <Rightbar />
          </Route>
          <Route path='/favorites' exact>
            <Sidebar />
            favorites
            <Rightbar />
          </Route>
          <Route path='/local' exact>
            <Sidebar />
            Local
            <Rightbar />
          </Route>
          <Route path='/create-new' exact>
            <Sidebar />
            create-new
            <Rightbar />
          </Route>
          <Route path='/pop-punk' exact>
            <Sidebar />
            Pop Punk
            <Rightbar />
          </Route>
          <Route path='/rocks' exact>
            <Sidebar />
            rocks
            <Rightbar />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
