import React from "react";
import Modal from "@material-ui/core/Modal";
import { onClose } from "./redux/actions";
import { connect } from "react-redux";
import "./Modal.css";

class SimpleModal extends React.Component {
  render() {

    if (this.props.isOpen === true) {
      return (
        <Modal
          open={this.props.isOpen}
          onClose={this.props.onCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>
        </Modal>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.modalReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseModal: () => dispatch(onClose()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleModal);
