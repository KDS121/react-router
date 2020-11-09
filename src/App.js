import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          {/* to match one route at a time we use switch */}
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
          {/* <Route path='/posts/:post_id' component={Post} /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
