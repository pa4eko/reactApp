import React from "react";

class Table extends React.Component {
  render() {

    const users = this.props.data.users.map((item) => {
      const {id, firstName, lastName} = item;
      return(
        <tr>
          <td >{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td><button type="button" class="btn btn-success" onClick={()=>this.props.deletePerson(id)}>Delete</button></td>
        </tr>
      )
    });

    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    );
  }
}

export default Table;
