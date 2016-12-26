import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {

    this.setState({ modalIsOpen: true });
  }

  closeModal() {    
    this.setState({ modalIsOpen: false });
  }

  render() {
    
    return (
      <div>
        <span>Click the button to open the modal</span>
        <Button onClick={this.openModal}> Click </Button>
        <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Sample Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Modal Content</h2>
             </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;