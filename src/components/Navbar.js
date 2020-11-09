import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
    // setTimeout(() =>{
    //     props.history.push('/about')
    // },2000);
    return (
        <nav className="nav-wrapper red darken-3">
          <div className="container">
              <a className="brand-logo">Poke's Times</a>
              <ul className="right">
                  {/* <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li> */}
                  <li><Link to="/">Home</Link></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  {/* it gives active class-NavLink */}
                  <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
          </div>  
        </nav>
    )
}
//  withRouter is a higher order component, in this case we use it to supercharge component
export default withRouter(Navbar)
