import { Component } from 'react';
import { Box } from './Box';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { toggleModal } = this;

    return (
      <Box
        p={15}
        // display="grid"
        // gridTemplateColumns={1}
        // gridGap={16}
        // paddingBottom={24}
      >
        <button type="button" onClick={toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={toggleModal}>
            <h1>Content children</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, nisi voluptas. Laudantium voluptates quasi labore
              harum quisquam vel nostrum nesciunt quae voluptas, commodi ipsam
              ab veniam, ducimus quo placeat perspiciatis!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Exercitationem, nisi voluptas.
              Laudantium voluptates quasi labore harum quisquam vel nostrum
              nesciunt quae voluptas, commodi ipsam ab veniam, ducimus quo
              placeat perspiciatis!
            </p>
            <button type="button" onClick={toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </Box>
    );
  }
}
