'use strict';

import React from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component{
  render(){
    return(
      <nav>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"></Link>
          <ul className="nav navbar-nav">
            <li><IndexLink to='/'>Home</IndexLink></li>
            <li><Link to='authors'>Authors</Link></li>
            <li><Link to='about'>About</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
