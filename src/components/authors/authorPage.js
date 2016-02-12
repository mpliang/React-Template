'use strict';

import React from 'react';
import {Router, Link} from 'react-router';
import AuthorApi from '../../api/authorApi';
import AuthorList from './authorList';

class AuthorsPage extends React.Component{
  constructor(props){
    super(props)
    this.state = { authors: [] }
  }
  componentDidMount(){
    this.setState({ authors: AuthorApi.getAllAuthors() });
  }
  render(){
    return(
      <div>
        <h1>Authors</h1>
        <Link to="/addAuthor" className="btn btn-lg btn-primary">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    )
  }
}

export default AuthorsPage;
