import React from 'react';
import AddForm from './AddForm';
import Table from './Table';

class App extends React.Component{

  render(){

    return(
      <div>
        <AddForm/>
        <Table/>
      </div>
    )
  }
}

export default App;