'use strict';

import React from 'react';

class AuthorList extends React.Component{
  render(){
    let createAuthorRow = (author) => {
      return (
        <tr key={author.id}>
          <td><a href={`/#authors/${author.id}`}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    }
    return(
      <div>
        <table className="table">
          <thead>
            <tr>ID</tr>
            <tr>Name</tr>
          </thead>
          <tbody>
              {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
}

AuthorList.propTypes = { authors: React.PropTypes.array.isRequired }

export default AuthorList;
