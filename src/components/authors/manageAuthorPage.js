import React from 'react';
import AuthorForm from './authorForm';

class ManageAuthorPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      author: {id: '', firstName: '', lastName: ''}
    }
  }
  setAuthorState(e){
    console.log(e.target.value);
    let field = e.target.name;
    let value = e.target.value;
    this.state.author[field] = value;
    this.setState({author: this.state.author});
  }
  render(){
    return(
      <div>
        <h1>Manage Author</h1>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}/>
      </div>
    )
  }
}

export default ManageAuthorPage;
