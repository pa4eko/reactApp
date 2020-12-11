import React from "react";
import { connect } from "react-redux";
import { addUser } from "./redux/actions";

class AddForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    description: ''
  }

  onInputChange = (e) => {
     let name = e.target.name;
     let value = e.target.value;
     this.setState({
       [name]: value
     })
   }

   onSubmit = (e) => {
    const {firstName, lastName, description} = this.state;
    e.preventDefault();
    this.props.addItem(firstName, lastName, description);
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            id="Name"
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="LastName">LastName</label>
          <input
          onChange={this.onInputChange}
            type="text"
            name="lastName"
            className="form-control"
            id="LastName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            onChange={this.onInputChange}
            type="text"
            name="description"
            className="form-control"
            id="description"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addItem: (firstName, lastName, description) => dispatch(addUser(firstName, lastName, description))
  }
}

export default connect(null,mapDispatchToProps) (AddForm);