import React from "react";

class AddForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
  }

  onInputChange = (e) => {
     let name = e.target.name;
     let value = e.target.value;
     this.setState({
       [name]: value
     })
   }

   onSubmit = (e) => {
    const {firstName, lastName} = this.state;
    e.preventDefault();
    this.props.addItem(firstName, lastName);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div class="form-group">
          <label for="Name">Name</label>
          <input
            name="firstName"
            type="text"
            class="form-control"
            id="Name"
            onChange={this.onInputChange}
          />
        </div>
        <div class="form-group">
          <label for="LastName">LastName</label>
          <input
          onChange={this.onInputChange}
            type="text"
            name="lastName"
            class="form-control"
            id="LastName"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

export default AddForm;