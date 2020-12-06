import React from 'react';
import AddForm from './AddForm';
import Table from './Table';

class App extends React.Component{

  state={
    users:[
      {id: 1, firstName: 'Liza', lastName: 'Ivanova'},
      {id: 2, firstName: 'Ivan', lastName: 'Petrovich'},
      {id: 3, firstName: 'Roma', lastName: 'Pavlov'},
    ]
  }

  newId = 3

  addItem = (firstName, lastName, email) => {

    this.setState(({users}) => {
      let newArr = [
        ...users,
        {
          id: ++this.newId,
          firstName,
          lastName,
          email
        }
      ]
      return{
        users: newArr
      }
    })
  }

  deletePerson = (id) => {
    this.setState(({users}) => {
      let afterDel = users.filter(item => item.id !== id);
      return {
        users: afterDel
      }
    }) 
  }

  render(){

    return(
      <div>
        <AddForm addItem={this.addItem}/>
        <Table data={this.state} deletePerson={this.deletePerson} />
      </div>
    )
  }
}

export default App;