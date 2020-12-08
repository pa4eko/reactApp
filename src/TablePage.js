import React from "react";
import AddForm from "./AddForm";
import Table from "./Table";

class TablePage extends React.Component {

  render() {
    return (
      <>
        <AddForm />
        <Table  />
      </>
    );
  }
}

export default TablePage;
