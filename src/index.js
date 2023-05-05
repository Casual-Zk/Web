import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ArchiveHomeSingle from './views/archive-home-single'
import Profile from './views/profile'
import Archive from './views/archive'
import Mint from './views/mint'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={ArchiveHomeSingle} exact path="/archive-home-single"/>
        <Route component={Profile} exact path="/profile" />
        <Route component={Archive} exact path="/archive" />
        <Route component={Mint} exact path="/mint" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
