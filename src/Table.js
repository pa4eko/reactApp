import React from "react";
import { connect } from "react-redux";
import { deletePerson, onOpen } from "./redux/actions";
import PropTypes from 'prop-types'

class Table extends React.Component {
  render() {

    const users = this.props.data.map((item) => {
      const {id, firstName, lastName} = item;
      return(
        <tr key={id}>
          <td >{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td><button type="button" className="btn btn-success" onClick={()=>this.props.deleteUser(id)}>Delete</button></td>
          <td><button type="button" className="btn btn-warning" onClick={()=>this.props.onOpenModal()}>More</button></td>
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

const mapStateToProps = (state) => {
  return {
    data: state.tablePageReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => dispatch(deletePerson(id)),
    onOpenModal: () => dispatch(onOpen())
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(Table);
