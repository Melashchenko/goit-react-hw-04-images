import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { GalleryItem, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, tags, largeImageURL },
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <GalleryItem>
        <Img
          src={webformatURL}
          alt={tags}
          onClick={() => setShowModal(!showModal)}
        />
      </GalleryItem>
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
