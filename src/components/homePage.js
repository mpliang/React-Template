'use strict';

import React from 'react';
import {Link} from 'react-router'

class Home extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>Tutorial</h1>
        <p>React, React Router, and Flux for ultra-reponsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    )
  }
}

export default Home
