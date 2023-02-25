import { useState, useEffect } from 'react';
import { Box } from './Box';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';

import { Loader } from './Loader/Loader';

export const App = () => {
  const [images, getImages] = useState([]);
  const [loading, getLoading] = useState(false);
  const [nameImages, getNameImages] = useState('');
  const [error, getError] = useState(null);
  const [pages, getPage] = useState(1);
  const [loadingMore, getLoadingMore] = useState(false);

  useEffect(() => {
    if (nameImages !== '') {
      getLoading(true);
      fetch(
        `https://pixabay.com/api/?q=${nameImages}&page=${pages}&key=32447548-ed7836316881b22e9c049cde5&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`No images and photos ${nameImages}`)
          );
        })
        .then(images => {
          return (
            getImages(prevState => [...prevState, ...images.hits]),
            images.hits.length >= 12
              ? getLoadingMore(true)
              : getLoadingMore(false)
          );
        })
        .catch(error => getError(error))
        .finally(() => getLoading(false));
    }
  }, [nameImages, pages]);

  const handleFormSubmit = newNameImages => {
    if (nameImages === newNameImages) {
      return;
    }

    getNameImages(newNameImages);
    getPage(1);
    getImages([]);
  };

  const loadMore = () => {
    getPage(prevState => prevState + 1);
  };

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

      {loadingMore && <Button onClick={loadMore} />}
    </Box>
  );
};
