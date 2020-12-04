import React from "react";

class AddForm extends React.Component {
  render() {
    return (
      <form>
        <div class="form-group">
          <label for="Name">Name</label>
          <input
            type="text"
            class="form-control"
            id="Name"
          />
        </div>
        <div class="form-group">
          <label for="LastName">LastName</label>
          <input
            type="text"
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