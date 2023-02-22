import { Component } from 'react';
import { Box } from './Box';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: null,
    showModal: false,
    loading: false,
    nameImages: '',
    error: null,
  };

  componentDidMount() {
    // this.setState({ loading: true });
    // fetch(
    //   'https://pixabay.com/api/?q=cat&page=1&key=32447548-ed7836316881b22e9c049cde5&image_type=photo&orientation=horizontal&per_page=12'
    // )
    //   .then(res => res.json())
    //   .then(images => this.setState({ images }))
    //   .finally(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.nameImages !== this.state.nameImages) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.nameImages}&page=1&key=32447548-ed7836316881b22e9c049cde5&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`No images and photos ${this.state.nameImages}`)
          );
        })
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  componentWillUnmount() {}

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = nameImages => {
    this.setState({ nameImages: nameImages });
  };

  render() {
    const { showModal, loading, images, error } = this.state;
    const { toggleModal, handleFormSubmit } = this;

    return (
      <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridGap={16}
        paddingBottom={24}
      >
        <Searchbar onSubmit={handleFormSubmit} />
        {error && <Box as="p">{error.message}</Box>}
        {loading && <Box as="p">Loader spinner</Box>}
        {!images && <Box as="p">Search images and photos</Box>}

        {images && <ImageGallery images={images} onClick={toggleModal} />}
        {showModal && (
          <Modal onClose={toggleModal}>
            <h1>Content children</h1>
          </Modal>
        )}
        {images && <Button onClick={toggleModal} />}
      </Box>
    );
  }
}
