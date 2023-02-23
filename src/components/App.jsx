import { Component } from 'react';
import { Box } from './Box';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';

import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    nameImages: '',
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.nameImages !== this.state.nameImages
    ) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.nameImages}&page=${this.state.page}&key=32447548-ed7836316881b22e9c049cde5&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`No images and photos ${this.state.nameImages}`)
          );
        })
        .then(images =>
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
          }))
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = nameImages => {
    this.setState({ nameImages: nameImages, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, images, error } = this.state;
    const { handleFormSubmit, loadMore } = this;

    return (
      <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridGap={16}
        paddingBottom={24}
      >
        <Searchbar onSubmit={handleFormSubmit} />

        {error && <Box as="p">{error.message}</Box>}

        {images.length >= 1 && <ImageGallery images={images} />}

        {loading && <Loader />}

        {images.length >= 12 && <Button onClick={loadMore} />}
      </Box>
    );
  }
}
