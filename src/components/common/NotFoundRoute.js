'use strict';

import React from 'react';
import {Link} from 'react-router';

class NotFoundRoute extends React.Component{
  render(){
    return(
      <div>
        <h1><b>404</b> No Route found</h1>
        <Link to="/" className="btn btn-primary btn-lg">Home</Link>
      </div>
    )
  }
}

export default NotFoundRoute;
