import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import { GalleryItem, Img } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    const { showModal } = this.state;

    return (
      <>
        <GalleryItem>
          <Img src={webformatURL} alt={tags} onClick={this.toggleModal} />
        </GalleryItem>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
